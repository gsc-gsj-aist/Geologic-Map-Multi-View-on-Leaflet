	//全国20区分図の画面設定（map_1）
var initcx = 139.0;
var initcy = 35.2;
var initZoomlv = 5;
var map_a = L.map('map_1', {
	center: [initcy, initcx],
	zoom: initZoomlv,
	minZoom: 4,
	maxZoom: 7,
	doubleClickZoom: true
});
map_a.setView([initcy, initcx], initZoomlv);
	//図幅選択の画面設定（map_2）
var map_b = L.map('map_2', {
	minZoom: 7,
	maxZoom: 11,
	doubleClickZoom: true
});
	//50k画面設定（map_3）
var map_c = L.map('map_3', {
	minZoom: 13,
	maxZoom: 15,
	doubleClickZoom: true
});

var layer_1 = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
	attribution: '<a href = "https://maps.gsi.go.jp/development/ichiran.html" target = "_blank">地理院タイル</a>',
	zIndex: 100
}).addTo(map_a);
map_b.addLayer(layer_1);
	// 全国20区分の緯度経度(南西端)の配列
var districts_list = [['網走', [43.5, 142.5], [45.5, 145.5]], ['釧路', [41.5, 142.5], [43.5, 145.5]], ['旭川', [43.5, 139.5], [45.5, 142.5]], ['札幌', [41.5, 139.5], [43.5, 142.5]], ['青森', [40, 139], [42, 142]], ['秋田', [38, 139], [40, 142]], ['新潟', [36.5, 138], [38.5, 141]], ['東京', [34.5, 138], [36.5, 141]], ['八丈島', [32.5, 138], [34.5, 141]], ['金沢', [35.5, 135], [37.5, 138]], ['京都', [33.167, 135], [35.5, 138]], ['岡山', [34.5, 132], [36.5, 135]], ['高知', [32.5, 132], [34.5, 135]], ['福岡', [33, 129], [35, 132]], ['鹿児島', [31, 129], [33, 132]], ['種子島', [29, 129], [31, 132]], ['奄美大島', [27, 128], [29, 131]], ['那覇', [25.5, 126], [27.5, 129]], ['宮古島', [24, 123], [26, 126]], ['小笠原', [24, 140.5], [28, 142.5]]];
	//全国20区分の表示
for (var i = 0; i < districts_list.length; i++) {
	var bounds = [districts_list[i][1], districts_list[i][2]];
	var district = L.rectangle(bounds, {color: "green", weight: 2, fillOpacity: 0.1}).addTo(map_a);
	district.bindTooltip(String(i + 1) + " " + districts_list[i][0],{permanent: true, direction: "center", opacity: 1.0, className: 'myCSSClass'
	}).openTooltip();
}
L.control.scale({imperial: false}).addTo(map_a);
var sheet_list = [];	//図幅情報の配列、
sheet_list['08'] = [["08029","鴻巣","Konosu","","36.00322","139.49703"],["08063","東京西北部","Tokyo-Seinambu","","35.50322","139.49703"],["08074","横浜","Yokohama","","35.33655","139.49703"],["08075","木更津","Kisarazu","","35.33655","139.74703"],["08076","姉崎","Anesaki","","35.33655","139.99703"],["08079","南部","Nanbu","","35.16989","138.24703"],["08084","横須賀","Yokosuka","","35.16989","139.49703"],["08085","富津","Futtsu","","35.16989","139.74703"],["08092","熱海","Atami","","35.00322","138.99703"],["08093","三崎","Misaki","","35.00322","139.49703"],["08094","那古","Nako","","35.00322","139.74703"],["08095","鴨川","Kamogawa","","35.00322","139.99703"],["08100","修善寺","Shuzenji","1955","34.83655","138.74703"],["08101","伊東","Ito","","34.83655","138.99703"],["08102","館山","Tateyama","","34.83655","139.74703"],["08105","下田","Shimoda","","34.66989","138.74703"],["08106","稲取","Inatori","","34.66989","138.99703"],["08107","大島","Oshima","","34.66989","139.24703"],["08109","神子元島","Mikomotojima","","34.50322","138.74703"],["08110","利島","Toshima","","34.50322","139.24703"]];
sheet_list['09'] = [["09001","新島","Nii-Jima","","34.33652","139.12203"],["09002","神津島","Kozu-Shima","","34.16992","138.99703"],["09003","三宅島","Miyake-Jima","","34.00322","139.37203"]];
sheet_list['10'] = [["10013","小口瀬戸","Koguchiseto","","37.00322","136.99703"],["10015","邑知潟","Ochigata","1966","36.83655","136.74703"],["10016","虻ガ島","Abugashima","1966","36.83655","136.99703"],["10017","三日市","Mikkaichi","","36.83655","137.24703"],["10020","津幡","Tsubata","","36.66989","136.49703"],["10021","石動","Isurugi","","36.66989","136.74703"],["10022","富山","Toyama","","36.66989","136.99703"],["10023","魚津","Uozu","1973","36.66989","137.24703"],["10026","金沢","Kanazawa","","36.50322","136.49703"],["10027","城端","Johana","","36.50322","136.74703"],["10028","八尾","Yatsuo","","36.50322","136.99703"],["10035","白木峰","Shirokimine","","36.33655","136.99703"],["10051","三日町","Mikkamachi","","36.00322","136.99703"],["10065","冠島","Kammurijima","1957","35.66989","135.24703"],["10075","宮津","Miyazu","","35.50322","134.99703"],["10076","丹後由良","Tangoyura","","35.50322","135.24703"],["10077","鋸崎","Nokogirizaki","","35.50322","135.49703"],["10078","西津","Nishizu","","35.50322","135.74703"],["10079","敦賀","Tsuruga","","35.50322","135.99703"],["10080","横山","Yokoyama","","35.50322","136.24703"],["10081","谷汲","Tanigumi","","35.50322","136.49703"],["10082","美濃","Mino","","35.50322","136.74703"]];
sheet_list['11'] = [["11018","彦根東部","Hikonetobu","","35.16989","136.24703"],["11019","津島","Tsushima","","35.16989","136.49703"],["11020","名古屋北部","Nagoya-Hokubu","","35.16989","136.74703"],["11030","御在所山","Gozaisho Yama","","35.00322","136.24703"],["11031","桑名","Kuwana","","35.00322","136.49703"],["11032","名古屋南部","Nagoya-Nambu","","35.00322","136.74703"],["11037","三田","Sanda","","34.83655","134.99703"],["11038","広根","Hirone","","34.83655","135.24703"],["11039","京都西南部","Kyoto-Seinambu","","34.83655","135.49703"],["11042","亀山","Kameyama","","34.83655","136.24703"],["11043","四日市","Yokkaichi","","34.83655","136.49703"],["11044","半田","Handa","","34.83655","136.74703"],["11049","神戸","Kobe","","34.66989","134.99703"],["11050","大阪西北部　","Osaka-Seihokubu","","34.66989","135.24703"],["11051","大阪東北部","Osaka-Tohokubu","","34.66989","135.49703"],["11052","奈良","Nara","","34.66989","135.74703"],["11054","津西部","Tsu-Seibu","","34.66989","136.24703"],["11055","津東部","Tsu-Toubu","","34.66989","136.49703"],["11056","師崎","Morozaki","","34.66989","136.74703"],["11062","大阪西南部","Osaka-Seinambu","","34.50322","135.24703"],["11063","大阪東南部","Osaka-Tonambu","","34.50322","135.49703"],["11064","桜井","Sakurai","","34.50322","135.74703"]];
sheet_list['13'] = [["13041","三島","Mishima","","33.83655","133.49703"],["13042","川口","Kawaguchi","","33.83655","133.74703"],["13052","日比原","Hibihara","","33.66989","133.24703"],["13062","伊野","Ino","","33.50322","133.24703"],["13068","八幡浜","Yawatahama","1956","33.33655","132.24703"],["13076","伊予高山","Iyo-takayama","1956","33.16989","132.24703"],["13077","宇和島","Uwajima","","33.16989","132.49703"],["13088","伊予鹿島","Iyo-kashima","","32.83655","132.24703"],["13089","宿毛","Sukumo","","32.83655","132.49703"]];
sheet_list['14'] = [["14075","別府","Beppu","","33.16989","131.24703"],["14076","大分","Oita","","33.16989","131.49703"],["14077","佐賀関","Saganoseki","","33.16989","131.74703"],["14085","宮原","Miyanoharu","","33.00322","130.99703"],["14086","久住","Kuju","","33.00322","131.24703"],["14087","犬飼","Inukai","","33.00322","131.49703"],["14088","臼杵","Usuki","","33.00322","131.74703"]];
sheet_list['15'] = [["15023","竹田","Taketa","","32.83655","131.24703"],["15025","佐伯","Saiki","","32.83655","131.74703"],["15033","三田井","Mitai","","32.66989","131.24703"],["15035","蒲江","Kamae","","32.66989","131.74703"],["15042","鞍岡","Kuraoka","1957","32.50322","130.99703"],["15043","諸塚山","Morotsuka yama","","32.50322","131.24703"],["15044","延岡","Nobeoka","","32.50322","131.49703"],["15051","椎葉村","Shiibamura","","32.33655","130.99703"],["15052","神門","Mikado","","32.33655","131.24703"],["15053","富高","Tomitaka","","32.33655","131.49703"],["15059","村所","Murasho","","32.16989","130.99703"],["15060","尾鈴山","Osuzu yama","","32.16989","131.24703"],["15061","都農","Tsuno","","32.16989","131.49703"],["15068","妻及び高鍋","Tsuma & Takanabe","","32.00322","131.24703"],["15075","野尻","Nojiri","","31.83655","130.99703"],["15076","宮崎","Miyazaki","","31.83655","131.24703"],["15083","都城","Miyakonojo","","31.66989","130.99703"],["15084","日向青島","Hyuga-aoshima","1958","31.66989","131.24703"],["15090","末吉","Sueyoshi","","31.50322","130.99703"],["15091","飫肥","Obi","","31.50322","131.24703"],["15096","志布志","Shibushi","","31.33655","130.99703"],["15097","都井岬","Toino misaki","","31.33655","131.24703"]];
	//キャプションの表示
var capt_sheet_name = [];
var capt_sheet_layers_name = [];
var capt_sheet_detail = [];
capt_sheet_name[0] = document.getElementById('capt_0a');
capt_sheet_name[1] = document.getElementById('capt_1a');
capt_sheet_name[2] = document.getElementById('capt_2a');
capt_sheet_name[3] = document.getElementById('capt_3a');
capt_sheet_layers_name[0] = document.getElementById('capt_0b');
capt_sheet_layers_name[1] = document.getElementById('capt_1b');
capt_sheet_layers_name[2] = document.getElementById('capt_2b');
capt_sheet_layers_name[3] = document.getElementById('capt_3b');
capt_sheet_detail[0] = document.getElementById('capt_0c');
capt_sheet_detail[1] = document.getElementById('capt_1c');
capt_sheet_detail[2] = document.getElementById('capt_2c');
capt_sheet_detail[3] = document.getElementById('capt_3c');

// ==============================================================
	//	全国20区分図より選択
	var evt_1;
function onMapClick(evt_1) {
	//　20区分図へ移動用ボタン
	var button_home = '<input type = "button" value = "全国図" onClick = "document.location = \'https://gbank.gsj.jp/owscontents/lv10_example_wms_50k.html\';">';
	document.getElementById("homeLocation").innerHTML = button_home;
	var district_selected;
	var distict_index = districts_list.findIndex(function (value) {
		var corner1 = L.latLng(value[1][0], value[1][1]),
		corner2 = L.latLng(value[2][0], value[2][1]),
		bounds_district = L.latLngBounds(corner1, corner2);
		district_selected = Boolean(bounds_district.contains(evt_1.latlng));
		return district_selected;
	});
	if (distict_index >= 0){
		map_a.remove();
		var center_district_lan = (districts_list[distict_index][1][0] + districts_list[distict_index][2][0])/2;
		var center_district_lng = (districts_list[distict_index][1][1] + districts_list[distict_index][2][1])/2;
		map_b.setView([center_district_lan, center_district_lng], 8);
		var sheet_name_evt1 = [];
		var sheet_bounds = [];
		for (key in sheet_list) {
			for (var i = 0; i < sheet_list[key].length; i++) {
				sheet_bounds = [[Number(sheet_list[key][i][4]), Number(sheet_list[key][i][5])], [Number(sheet_list[key][i][4]) + 1/6, Number(sheet_list[key][i][5]) + 0.25]];	//図幅の四隅の配列
				sheet_name_evt1 = L.rectangle(sheet_bounds, {color: "green", weight: 2, fillOpacity: 0.1}).addTo(map_b);
				sheet_name_evt1.bindTooltip(sheet_list[key][i][1], {direction: "center", permanent: true, opacity: 1.0, className: 'myCSSClass'}).openTooltip();	//図幅名の表示
			}
		}
		for (var i = 0; i < districts_list.length; i++) {
			var bounds = [districts_list[i][1], districts_list[i][2]];
			var district = L.rectangle(bounds, {color: "green", weight: 2, fillOpacity: 0.1}).addTo(map_b);	//地域区分範囲の表示
			district.bindTooltip(String(i + 1) + " " + districts_list[i][0],{permanent: true, direction: "center", opacity: 1.0, className: 'myCSSClass_2'
			}).openTooltip();	//地域区分名の表示
		}
	}
	L.control.scale({imperial: false}).addTo(map_b);
}
//
	var sheet_no;	//図幅番号
	var sheet_name;		//図幅の名称
	var sheet_name_b		//図幅名称(ボールド)
	var sheet_lat;	//図幅の経度緯度
	var sheet_lng;
	//
function sheet_search(search_y, search_x) {	//	図幅の検索
	L: for (key in sheet_list) {
		for (var i = 0; i < sheet_list[key].length; i++){
			var corner1 = L.latLng(Number(sheet_list[key][i][4]), Number(sheet_list[key][i][5])),
			corner2 = L.latLng(Number(sheet_list[key][i][4]) + 0.1667, Number(sheet_list[key][i][5]) + 0.25),
			bounds_sheet = L.latLngBounds(corner1, corner2);
			if (Boolean(bounds_sheet.contains([search_y, search_x]))) {
				sheet_no = sheet_list[key][i][0];
				sheet_lat = Number(sheet_list[key][i][4]);
				sheet_lng = Number(sheet_list[key][i][5]);
				sheet_name = sheet_list[key][i][1];
				sheet_name_b = "<b>" + sheet_name + "</b>";
				return [sheet_no, sheet_name, sheet_name_b, sheet_lat, sheet_lng];
				break L;
			}
		}
	}
		sheet_name_b = "";
		sheet_no = "99999";	//図幅が未検出の時
		sheet_name = "";
		return [sheet_no, sheet_name, sheet_name_b];
}
//
	var layers_name_xml = [];		//レイヤの名称, xml処理用
	var layers_note_xml = [];		//レイヤの説明, xml処理用
	var layers_detail_xml = [];			//シート説明, xml処理用
	var sheet_year = [];		//図幅の年
	var sheet_ref_year = [];	//図幅説明書の年
	var url_ref =　[];		//pdf のURL
	var sheetNo_0 = [];	// 画面表示レイヤの図幅番号
	var layerList_0 = [];	//画面表示レイヤの名称
	var layer_ = [];	//地質図画像の区別用
	var sheetLayers_0 = [];	//0～　表示する有効な図幅のレイヤ名 + 説明
	var sheetData = [];	//0～3、図幅検索で得られた　図幅名
	var sheetNo = [];	//0～3、図幅検索で得られた　表示する4図幅の番号（存在しない図幅あり、99999）
	var caption_arrange = []; //Capation　の配置
	//
function capability_req(sheetNo, sheetData, caption_arrange) {
	var sheetNo_0 = [];	//0～　表示可能図幅のみ
	var url_no = [];	//url
	var sheets_cnt = 0;
	for (var i = 0; i < 4; i++){
		if (sheetNo[i] !== "99999" && sheetNo[i] !== ""){
			sheetNo_0[sheets_cnt] = sheetNo[i];
			sheets_cnt++;
		}
	}
	for (var i = 0; i < sheetNo_0.length; i++) {
		url_no[i] = 'https://gbank.gsj.jp/ows/geologicmap50k_' + sheetNo_0[i];
	}
	var layersData = [];
	var xmlData = [];
	for (var i = 0; i < sheetNo_0.length; i++) {
			dfd = $.get(url_no[i],{
			service: "wms", request: "getcapabilities"},
			function(data, textStatus){
			}, "xml");
		layersData.push(dfd);
	}
	$.when.apply($, layersData)
		.done(function(){
			if (layersData.length == 1){
				xmlData[0] = arguments[0];
			}else{
				for (var i = 0; i < layersData.length;  i++) {
					xmlData[i] = arguments[i][0];
				}
			}
			//
				function xmlToJson(xml) {
					var obj = {};
					if (xml.nodeType == 1) {
						if (xml.attributes.length > 0) {
							for (var j = 0; j < xml.attributes.length; j++) {
								var attribute = xml.attributes.item(j);
								obj[attribute.nodeName] = attribute.nodeValue;
							}
						}
					} else if (xml.nodeType == 3) {
						obj = xml.nodeValue.trim();
					}
					if (xml.hasChildNodes()) {
						for(var i = 0; i < xml.childNodes.length; i++) {
							var item = xml.childNodes.item(i);
							var nodeName = item.nodeName;
							if (typeof(obj[nodeName]) == "undefined") {
								var tmp = xmlToJson(item);
								if(tmp !== "")
									obj[nodeName] = tmp;
							} else {
								if (typeof(obj[nodeName].push) == "undefined") {
									var old = obj[nodeName];
									obj[nodeName] = [];
									obj[nodeName].push(old);
								}
								var tmp = xmlToJson(item);
								if(tmp !== "")
									obj[nodeName].push(tmp);
							}
						}
					}
					return obj;
				};
			//
		var capabl_results_xml = [];	//xml処理用
		var document_xml = [];	//xml処理用
		var document_layers_xml = [];	//xml処理用
		var layers_polygon = [];	//図幅のpolygonレイヤーの構成
		var layers_line_point = [];	//図幅のlineとpointレイヤーの構成
		var layers_label = [];	//図幅のlabelレイヤーの構成
		var layersName = [];	//xml処理用
		for (var i = 0; i < 4; i++) {	//配列初期化
			layers_polygon[i] = [];
			layers_line_point[i] = [];
			layers_label[i] = [];
			layersName[i] = [];
			for (var j = 0; j < 2; j++){	//レイヤーの名称、と説明
				layers_polygon[i][j] = [];
				layers_line_point[i][j] = [];
				layers_label[i][j] = [];
				layersName[i][j] = [];
			}
		}
		
		for (var i = 0; i < 4; i++) {
			layers_name_xml[i] = [];
			layers_note_xml[i] = [];
		}
		//
		for (var k = 0; k < xmlData.length; k++) {
			capabl_results_xml = xmlData[k];
			document_xml = xmlToJson(capabl_results_xml);
			document_layers_xml = document_xml['WMS_Capabilities']['Capability']['Layer']['Layer'];
			for (var i = 0; i < document_layers_xml.length; i++)  {
				layers_name_xml[k][i] = document_layers_xml[i]['Name']['#text'];	//レイヤの名称
				layers_note_xml[k][i] = document_layers_xml[i]['Title']['#text'];	//レイヤの説明
			}
			layers_detail_xml[k] = document_xml['WMS_Capabilities']['Capability']['Layer']['Abstract']['#text']; //シート説明
			sheet_year[k] = layers_detail_xml[k].substr((layers_detail_xml[k].indexOf("年"))-4, 4);
			var sheet_list_key = String(sheetNo[k].substr(0,2));		//地域番号の取り出し（図幅番号の左端2桁）
			for (key in sheet_list[sheet_list_key]){	
				if (sheet_list[sheet_list_key][key][0] == sheetNo[k]){
					if (sheet_list[sheet_list_key][key][3] !== ""){
						sheet_ref_year[k] = sheet_list[sheet_list_key][key][3];
					} else {
						sheet_ref_year[k] = sheet_year[k];
					}
					break;
				}
			}
			url_ref[k] = 'https://www.gsj.jp/data/50KGM/PDF/GSJ_MAP_G050_' + sheetNo[k] + '_' + sheet_ref_year[k] + '_D.pdf';
		//
		var selectionList_polygon = ['geo_A', 'ol1_A', 'ol2_A', 'ol3_A', 'ol4_A'];	// ポリゴンの並び
		var selectionList_line_point = ['geo_L', 'gfd', 'ol1', 'ol1_L', 'ol2', 'ol2_L', 'ol3', 'ol3_L', 'ol4', 'ol4_L', 'sec', 'pnt', 'strdip'];	// ラインとポイントの並び
		var selectionList_label = ['geo_A_label', 'ol1_A_label', 'ol2_A_label', 'ol3_A_label', 'ol4_A'];	//ラベルの並び(注　'geo_A_label'などにはメタ情報なし）

			for (var j = 0; j < 2; j++){	//レイヤーの名称、と説明
				layers_polygon[k][j] = [];
				layers_line_point[k][j] = [];
				layers_label[k][j] = [];
				layersName[k][j] = [];
			}

	for (var i = 0, j = 0; i < selectionList_polygon.length; i++) {
		var layer_name_index = layers_name_xml[k].indexOf(selectionList_polygon[i]);
		if (layer_name_index >= 0){
			layers_polygon[k][0][j] = selectionList_polygon[i];
			layers_polygon[k][1][j] = layers_note_xml[k][layer_name_index];
			j++;
		}
	}
	for (var i = 0, j = 0; i < selectionList_line_point.length; i++) {
		var layer_name_index = layers_name_xml[k].indexOf(selectionList_line_point[i]);
		if (layer_name_index >= 0){
			layers_line_point[k][0][j] = selectionList_line_point[i];
			layers_line_point[k][1][j] = layers_note_xml[k][layer_name_index];
			j++;
		}
	}
	for (var i = 0, j = 0; i < selectionList_label.length; i++) {
		var layer_name_index = layers_name_xml[k].indexOf(selectionList_label[i]);
		if (layer_name_index >= 0){
			layers_label[k][0][j] = selectionList_label[i];
			layers_label[k][1][j] = layers_note_xml[k][layer_name_index];
			j++;
		}
	}
// 
			layersName[k][0] = layers_polygon[k][0].concat(layers_line_point[k][0]);
			layersName[k][1] = layers_polygon[k][1].concat(layers_line_point[k][1]);
			sheetLayers_0[k] = "";
			for (var i = 0; i < layersName[k][0].length; i++) {
				sheetLayers_0[k] = sheetLayers_0[k] + "<b>" + layersName[k][0][i] + ": </b>" + layersName[k][1][i] + "<br>";
			}
	}	//0～k　の繰り返しlayersName, sheetLayers_0	は　99999を除く
	//
	var sheet_name_pdf_dsp = [];	//0～3、図幅名称と番号
	var sheet_layers_dsp = [];	//0～3、レイヤの名称
	var layers_detail_dsp = [];	//0～3、シート詳細
	var sheetNamePdf = [];	//表示位置に合わせた0～3、図幅名称と番号
	var sheetLayers = [];	//表示位置に合わせた0～3、レイヤの名称
	var layersDetail = [];	//表示位置に合わせた0～3、シート詳細
	for (var i = 0; i < 4; i++){
		sheet_name_pdf_dsp[i] = "";
		sheet_layers_dsp[i] = "";
		layers_detail_dsp[i] = "";
	}
		var k_no = 0;
		for (var i = 0; i < 4; i++) {
			if (sheetNo[i] == "99999" || sheetNo[i] == ""){	//sheet_name_pdf_dsp	は図幅右回りの順
				sheet_layers_dsp[i] = "";
				layers_detail_dsp[i] = "";
				sheet_name_pdf_dsp[i] = "";
			} else {
				sheet_layers_dsp[i] = sheetLayers_0[k_no];
				layers_detail_dsp[i] = layers_detail_xml[k_no] + "<br><b>図幅番号： </b>" + sheetNo[i];
				sheet_name_pdf_dsp[i] = sheetData[i] + " (" + sheet_year[i] + "年)" + '<br><span><a href ="' + url_ref[i] + '" target =\"_blank\"><img src = \"images/download_ref.jpg\"></a> 説明書(PDF)</span>';
				k_no++;
			}
		}

	for (var i = 0; i < 4; i++){	//i　は、captionの位置番号
		var index = caption_arrange[i];
		//sheetNamePdf	左上から表示順
		if (index == 9 || sheet_layers_dsp[index] == ""){
			sheetNamePdf[i] = "";
			sheetLayers[i] = "";
			layersDetail[i] = "";
		} else {
			sheetNamePdf[i] = sheet_name_pdf_dsp[index];
			sheetLayers[i] = "<b>レイヤ構成： </b><br>" + sheet_layers_dsp[index];
			layersDetail[i] = "<b>出版図幅： </b><br>" + layers_detail_dsp[index];
		}
	}

	//
	frm_caption_dsp(sheetNamePdf[0], sheetNamePdf[1], sheetNamePdf[2], sheetNamePdf[3], sheetLayers[0], sheetLayers[1], sheetLayers[2], sheetLayers[3], layersDetail[0], layersDetail[1], layersDetail[2], layersDetail[3]);
	//
				var layerName_00 = [];
				//layersName[k_no][0];	はレイヤの名称、k_noは、有効シートの番号
				var k_no = 0;
				for (var i = 0; i <4; i++) {
					layerName_00[i] = [];
					if (sheetNo[i] !== "99999" && sheetNo[i] !== ""){
						layerName_00[i][0] = layersName[k_no][0];
						k_no++;
					}else {
						layerName_00[i][0] = "";
					}
				}
	update_sheet(sheetNo[0], sheetNo[1], sheetNo[2], sheetNo[3], layerName_00[0][0], layerName_00[1][0], layerName_00[2][0], layerName_00[3][0]);
	
		//
		return [layers_name_xml, layers_note_xml, layers_detail_xml];
			})
		.fail(function(data_capabilities){
			window.alert('図幅が配信サービスされておりません');
		});	
	}		//capability_req 最終行
//  
function frm_caption_dsp(disp_0, disp_1, disp_2, disp_3, disp_a, disp_b, disp_c, disp_d, disp_A, disp_B, disp_C, disp_D) {
	capt_sheet_name[0].innerHTML = disp_0;
	capt_sheet_name[1].innerHTML = disp_1;
	capt_sheet_name[2].innerHTML = disp_2;
	capt_sheet_name[3].innerHTML = disp_3;
	capt_sheet_layers_name[0].innerHTML = disp_a;
	capt_sheet_layers_name[1].innerHTML = disp_b;
	capt_sheet_layers_name[2].innerHTML = disp_c;
	capt_sheet_layers_name[3].innerHTML = disp_d;
	capt_sheet_detail[0].innerHTML = disp_A;
	capt_sheet_detail[1].innerHTML = disp_B;
	capt_sheet_detail[2].innerHTML = disp_C;
	capt_sheet_detail[3].innerHTML = disp_D;
}
//  
	var sheetLayers_arr;
function sheetLayers_call(sheetLayers_arr, sheets_list) {
	layer_[sheetLayers_arr] = L.tileLayer.betterWms('https://gbank.gsj.jp/ows/geologicmap50k_' + sheetLayers_arr, {
		layers: sheets_list,
		format: 'image/png',
		transparent : true,
		opacity: 0.65,
		zIndex: 3000,
		attribution: '<a href = "https://www.gsj.jp/license/index.html" target = "_blank">Geological Survey of Japan, AIST</a>'
	}).addTo(map_c);
}
//  
function update_sheet(sheet_no_0, sheet_no_1, sheet_no_2, sheet_no_3, layers_list_0, layers_list_1, layers_list_2, layers_list_3) {
	var disp_newSheet = [sheet_no_0, sheet_no_1, sheet_no_2, sheet_no_3];
			//取得図幅の番号リスト
	var layersList = [layers_list_0, layers_list_1, layers_list_2, layers_list_3];
			//取得シートのレイヤ構成
	for (var i = 3; i >= 0; i--) {	// i = 0は画面中央に位置する図幅に対応するので、最後まで残す
		if (disp_newSheet[i] !== "99999" && disp_newSheet[i] !== "" && disp_newSheet[i] !== undefined){
			if (sheetNo_0.indexOf(disp_newSheet[i]) < 0) {	//未表示の図幅の場合
				sheetNo_0.unshift(disp_newSheet[i]);	//図幅一覧
				layerList_0.unshift(layersList[i]);	//図幅のレイヤリスト
			sheetLayers_call(disp_newSheet[i], layersList[i]);
			} else {	//既に表示されている場合、配列disp_sheetNo_2　の先頭に移動する
				var hit_sheet = sheetNo_0.indexOf(disp_newSheet[i]);
				sheetNo_0.splice(hit_sheet, 1);
				sheetNo_0.unshift(disp_newSheet[i]);
				layerList_0.splice(hit_sheet, 1);
				layerList_0.unshift(layersList[i]);
			}
		}
	}

	for (var i = sheetNo_0.length -1; i >= 4; i--) {
		//表示中のシートdisp_sheetNo_2　が4以上になった時、余剰図幅を削除
			var remove_no = sheetNo_0[i];
			if (map_c.hasLayer(layer_[remove_no])) {
				layer_[remove_no].remove();
				sheetNo_0.pop();
				layerList_0.pop();
			}
	}
}
//  
	var size_width, size_height;
function getWindowSize(){//表示窓の大きさの取得、表示窓は図幅が最大4枚まで表示されるように、ズームレベルを限定するため
	size_width = window.innerWidth;
	size_height = window.innerHeight;
	return [size_width, size_height];
}
//  
	var setView_param;
	var evt_2;
function onMapClick_2(evt_2) {
	var layer_2 = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
	attribution: '<a href = "https://maps.gsi.go.jp/development/ichiran.html" target = "_blank">地理院タイル</a>',
	zIndex: 100
}).addTo(map_c);
		sheet_search([evt_2.latlng.lat, evt_2.latlng.lng]);
		sheetData[0] = sheet_name_b;
		sheetNo[0] = sheet_no;
		sheetData[1] = ""; sheetData[2] = ""; sheetData[3] = "";
		sheetNo[1] = ""; sheetNo[2] = ""; sheetNo[3] = "";
		var center_Y = sheet_lat + 0.0833;
		var center_X = sheet_lng + 0.125;
		getWindowSize();
		if (size_width > 1840 || size_height > 1000){
			setView_param = 14;	//表示窓が大きいときzoomレベルを大きくする
		} else {
			setView_param = 13;
		}
		map_c.setView([center_Y, center_X], setView_param);
		map_c.setMinZoom(setView_param);
		caption_arrange = [0, 9, 9, 9];	//キャプションの表示、配列は[左上、右上、左下、右下]、数字0,1,2,3は各種データの番号、9は表示なし
		capability_req(sheetNo, sheetData, caption_arrange);
		map_b.remove();
		L.control.scale({imperial: false}).addTo(map_c);
}
//  
	var evt_3;
function onMapMove(evt_3) {
	document.getElementById('map_3').style.cursor = 'crosshair'
	var map_center_crd = map_c.getCenter();
	sheet_search([map_center_crd.lat, map_center_crd.lng]);
	var sheet_bounds = [];
	sheet_bounds._northEast = [];
	sheet_bounds._northEast.lat = sheet_lat + 0.1667;
	sheet_bounds._northEast.lng = sheet_lng + 0.25;
	sheet_bounds._southWest = [];
	sheet_bounds._southWest.lat = sheet_lat;
	sheet_bounds._southWest.lng = sheet_lng;
	var map_bounds_crd = map_c.getBounds();
	var flg_north = Boolean(map_bounds_crd._northEast.lat < sheet_bounds._northEast.lat);
	var flg_east = Boolean(map_bounds_crd._northEast.lng < sheet_bounds._northEast.lng);
	var flg_south = Boolean(map_bounds_crd._southWest.lat < sheet_bounds._southWest.lat);
	var flg_west = Boolean(map_bounds_crd._southWest.lng < sheet_bounds._southWest.lng);
	if (map_c.getZoom() > 12){
		if ((flg_north == true) && (flg_east == true) && (flg_south == false) && (flg_west == false)) {		//　図幅が1枚のみ
			sheet_search([map_center_crd.lat, map_center_crd.lng]);
			sheetData[0] = sheet_name_b;
			sheetData[1] = ""; sheetData[2] = ""; sheetData[3] = "";
			sheetNo[0] = sheet_no;
			sheetNo[1] = ""; sheetNo[2] = ""; sheetNo[3] = "";
			caption_arrange = [0, 9, 9, 9];
			capability_req(sheetNo, sheetData, caption_arrange);
		} else if ((flg_north == false) && (flg_east == true) && (flg_south == false) && (flg_west == false)) {		//　上に隣接図幅
			sheet_search([map_center_crd.lat, map_center_crd.lng]);
			sheetData[0] = sheet_name_b;
			sheetNo[0] = sheet_no;
			sheet_search([map_center_crd.lat + 0.1667, map_center_crd.lng]);
			sheetData[1] = sheet_name_b;
			sheetNo[1] = sheet_no;
			sheetData[2] = ""; sheetData[3] = "";
			sheetNo[2] = ""; sheetNo[3] = "";
			caption_arrange = [1, 9, 0, 9];
			capability_req(sheetNo, sheetData, caption_arrange);
		} else if ((flg_north == true) && (flg_east == false) && (flg_south == false) && (flg_west == false)){		//　右に隣接図幅
			sheet_search([map_center_crd.lat, map_center_crd.lng]);
			sheetData[0] = sheet_name_b;
			sheetNo[0] = sheet_no;
			sheet_search([map_center_crd.lat, map_center_crd.lng + 0.25]);
			sheetData[1] = sheet_name_b;
			sheetNo[1] = sheet_no;
			sheetData[2] = ""; sheetData[3] = "";
			sheetNo[2] = ""; sheetNo[3] = "";
			caption_arrange = [0, 1, 9, 9];
			capability_req(sheetNo, sheetData, caption_arrange);
		}else if ((flg_north == true) && (flg_east == true) && (flg_south == true) && (flg_west == false)){		//　下に隣接図幅
			sheet_search([map_center_crd.lat, map_center_crd.lng]);
			sheetData[0] = sheet_name_b;
			sheetNo[0] = sheet_no;
			sheet_search([map_center_crd.lat -0.1667, map_center_crd.lng]);
			sheetData[1] = sheet_name_b;
			sheetNo[1] = sheet_no;
			sheetData[2] = ""; sheetData[3] = "";
			sheetNo[2] = ""; sheetNo[3] = "";
			caption_arrange = [0, 9, 1, 9];
			capability_req(sheetNo, sheetData, caption_arrange);
		}else if ((flg_north == true) && (flg_east == true) && (flg_south == false) && (flg_west == true)){		//　左に隣接図幅
			sheet_search([map_center_crd.lat, map_center_crd.lng]);
			sheetData[0] = sheet_name_b;
			sheetNo[0] = sheet_no;
			sheet_search([map_center_crd.lat, map_center_crd.lng -0.25]);
			sheetData[1] = sheet_name_b;
			sheetNo[1] = sheet_no;
			sheetData[2] = ""; sheetData[3] = "";
			sheetNo[2] = ""; sheetNo[3] = "";
			caption_arrange = [1, 0, 9, 9];
			capability_req(sheetNo, sheetData, caption_arrange);
		} else if ((flg_north == false) && (flg_east == false) && (flg_south == false) && (flg_west == false)){		//　右上角　に隣接図幅3枚
			sheet_search([map_center_crd.lat, map_center_crd.lng]);
			sheetData[0] = sheet_name_b;
			sheetNo[0] = sheet_no;
			sheet_search([map_center_crd.lat + 0.1667, map_center_crd.lng]);
			sheetData[1] = sheet_name_b;
			sheetNo[1] = sheet_no; 
			sheet_search([map_center_crd.lat + 0.1667, map_center_crd.lng + 0.25]);
			sheetData[2] = sheet_name_b;
			sheetNo[2] = sheet_no;
			sheet_search([map_center_crd.lat, map_center_crd.lng + 0.25]);
			sheetData[3] = sheet_name_b;
			sheetNo[3] = sheet_no;
			caption_arrange = [1, 2, 0, 3];
			capability_req(sheetNo, sheetData, caption_arrange);
		} else if ((flg_north == true) && (flg_east == false) && (flg_south == true) && (flg_west == false)){	 // 右下角　に隣接図幅3枚
			sheet_search([map_center_crd.lat, map_center_crd.lng]);
			sheetData[0] = sheet_name_b;
			sheetNo[0] = sheet_no;
			sheet_search([map_center_crd.lat, map_center_crd.lng + 0.25]);
			sheetData[1] = sheet_name_b;
			sheetNo[1] = sheet_no; 
			sheet_search([map_center_crd.lat -0.1667, map_center_crd.lng + 0.25]);
			sheetData[2] = sheet_name_b;
			sheetNo[2] = sheet_no;
			sheet_search([map_center_crd.lat -0.1667, map_center_crd.lng]);
			sheetData[3] = sheet_name_b;
			sheetNo[3] = sheet_no;
			caption_arrange = [0, 1, 3, 2];
			capability_req(sheetNo, sheetData, caption_arrange);
		} else if ((flg_north == true) && (flg_east == true) && (flg_south == true) && (flg_west == true)){	// 左下角　に隣接図幅3枚
			sheet_search([map_center_crd.lat, map_center_crd.lng]);
			sheetData[0] = sheet_name_b;
			sheetNo[0] = sheet_no;
			sheet_search([map_center_crd.lat -0.1667, map_center_crd.lng]);
			sheetData[1] = sheet_name_b;
			sheetNo[1] = sheet_no;
			sheet_search([map_center_crd.lat -0.1667, map_center_crd.lng -0.25]);
			sheetData[2] = sheet_name_b;
			sheetNo[2] = sheet_no;
			sheet_search([map_center_crd.lat, map_center_crd.lng -0.25]);
			sheetData[3] = sheet_name_b;
			sheetNo[3] = sheet_no;
			caption_arrange = [3, 0, 2, 1];
			capability_req(sheetNo, sheetData, caption_arrange);
		} else if ((flg_north == false) && (flg_east == true) && (flg_south == false) && (flg_west == true)){
		// 左上角　に隣接図幅3枚
			sheet_search([map_center_crd.lat, map_center_crd.lng]);
			sheetData[0] = sheet_name_b;
			sheetNo[0] = sheet_no;
			sheet_search([map_center_crd.lat, map_center_crd.lng -0.25]);
			sheetData[1] = sheet_name_b;
			sheetNo[1] = sheet_no; 
			sheet_search([map_center_crd.lat + 0.1667, map_center_crd.lng -0.25]);
			sheetData[2] = sheet_name_b;
			sheetNo[2] = sheet_no;
			sheet_search([map_center_crd.lat + 0.1667, map_center_crd.lng]);
			sheetData[3] = sheet_name_b;
			sheetNo[3] = sheet_no;
			caption_arrange = [2, 3, 1, 0];
			capability_req(sheetNo, sheetData, caption_arrange);
		}
	}
}	
map_a.on('click', onMapClick);
map_b.on('click', onMapClick_2);
map_c.on('moveend', onMapMove);