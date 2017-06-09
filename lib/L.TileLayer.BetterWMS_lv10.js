L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({
  
  onAdd: function (map) {
    // Triggered when the layer is added to a map.
    //   Register a click listener, then do all the upstream WMS things
    L.TileLayer.WMS.prototype.onAdd.call(this, map);
    map.on('click', this.getFeatureInfo, this);
  },
  
  onRemove: function (map) {
    // Triggered when the layer is removed from a map.
    //   Unregister a click listener, then do all the upstream WMS things
    L.TileLayer.WMS.prototype.onRemove.call(this, map);
    map.off('click', this.getFeatureInfo, this);
  },
  
  getFeatureInfo: function (evt) {
    // Make an AJAX request to the server and hope for the best
    var url = this.getFeatureInfoUrl(evt.latlng);
    var showResults = L.Util.bind(this.showGetFeatureInfo, this);
    $.ajax({
      url: url,
      success: function (data, status, xhr) {				// 変更箇所はじめ
        //var err = typeof data === 'string' ? null : data;
        var err = null;
        if(data) {
          if(typeof data !== 'string' || data.match(/ServiceException/) != null) {
            err = data;
          }
        } else {
          err = "no data";
        }													// 変更箇所終わり
        showResults(err, evt.latlng, data);	
      },
      error: function (xhr, status, error) {
        showResults(error);  
      }
    });
  },
  
  getFeatureInfoUrl: function (latlng) {
    // Construct a GetFeatureInfo request URL given a point
    var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom());
    var size = this._map.getSize();
    //var srs = 'EPSG:4326';
    var srs = 'EPSG:3857';				// これより変更箇所
    var bounds = this._map.getBounds();
    if(srs != 'EPSG:4326') {
      var src_srs = new proj4.Proj('EPSG:4326');
      var dest_srs = new proj4.Proj(srs);

      var ne_p = new proj4.toPoint([bounds._northEast.lng, bounds._northEast.lat]);
      proj4.transform(src_srs, dest_srs, ne_p);
      bounds._northEast.lng = ne_p.x;
      bounds._northEast.lat = ne_p.y;
      var sw_p = new proj4.toPoint([bounds._southWest.lng, bounds._southWest.lat]);
      proj4.transform(src_srs, dest_srs, sw_p);
      bounds._southWest.lng = sw_p.x;
      bounds._southWest.lat = sw_p.y;
    }								//　変更箇所終了
        
    var params = {
          request: 'GetFeatureInfo',
          service: 'WMS',
          srs: srs,
          styles: this.wmsParams.styles,
          transparent: this.wmsParams.transparent,
          version: this.wmsParams.version,      
          format: this.wmsParams.format,
          bbox: bounds.toBBoxString(),
          height: size.y,
          width: size.x,
          layers: this.wmsParams.layers,
          query_layers: this.wmsParams.layers,
          info_format: 'text/html'
        };
    
    params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
    params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;
    
    return this._url + L.Util.getParamString(params, this._url, true);
  },
  
  showGetFeatureInfo: function (err, latlng, content) {
    if (err) { console.log(err); return; } // do nothing if there's an error
    
    // Otherwise show the content in a popup, or something.
    L.popup({ maxWidth: 300})
      .setLatLng(latlng)
      .setContent(content)
      .openOn(this._map);
  }
});

L.tileLayer.betterWms = function (url, options) {
  return new L.TileLayer.BetterWMS(url, options);  
};
