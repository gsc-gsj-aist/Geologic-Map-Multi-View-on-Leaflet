# Geologic-Map-Multi-View-on-Leaflet
隣接する複数図幅の自動表示を可能とする、5万分の1地質図幅閲覧のためのJavascriptソースコードの例
*概要*  
5万分の1地質幅は図郭単位で地質情報が配信されていますが、隣接図幅の情報が同時に必要となることがあります。そこで、閲覧画面が図幅の端に達したとき、隣接図幅が自動的に現れるように工夫しました。図幅単位の切り替え操作が不要で、連続する5万分の1地質図幅をあたかもひとつのサービスのように表示することができます。本ソースコードにも、GetFeatureInfo機能が組み込まれていますので、メタ情報の表示が可能です。

	産総研知的財産管理番号： H29PRO-2094

本ソースコードの実行には、以下のオープンソースライブラリを必要とします。
・Leaflet (BSD License)  
・jQuery (MIT License)  
・Proj4js (MIT License)  
・L.TileLayer.BetterWMS_lv10  
・xmlToJson (MIT License、lv10_example_50k.js内)  
