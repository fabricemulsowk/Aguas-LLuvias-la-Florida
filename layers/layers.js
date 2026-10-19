var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PuenteAlto_1 = new ol.format.GeoJSON();
var features_PuenteAlto_1 = format_PuenteAlto_1.readFeatures(json_PuenteAlto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuenteAlto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuenteAlto_1.addFeatures(features_PuenteAlto_1);
var lyr_PuenteAlto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuenteAlto_1, 
                style: style_PuenteAlto_1,
                popuplayertitle: 'Puente Alto',
                interactive: true,
                title: '<img src="styles/legend/PuenteAlto_1.png" /> Puente Alto'
            });
var format_LaFlorida_2 = new ol.format.GeoJSON();
var features_LaFlorida_2 = format_LaFlorida_2.readFeatures(json_LaFlorida_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaFlorida_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaFlorida_2.addFeatures(features_LaFlorida_2);
var lyr_LaFlorida_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaFlorida_2, 
                style: style_LaFlorida_2,
                popuplayertitle: 'La Florida',
                interactive: true,
                title: '<img src="styles/legend/LaFlorida_2.png" /> La Florida'
            });
var format_ObrasProyectadas_3 = new ol.format.GeoJSON();
var features_ObrasProyectadas_3 = format_ObrasProyectadas_3.readFeatures(json_ObrasProyectadas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObrasProyectadas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObrasProyectadas_3.addFeatures(features_ObrasProyectadas_3);
var lyr_ObrasProyectadas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObrasProyectadas_3, 
                style: style_ObrasProyectadas_3,
                popuplayertitle: 'Obras Proyectadas',
                interactive: true,
    title: 'Obras Proyectadas<br />\
    <img src="styles/legend/ObrasProyectadas_3_0.png" /> Cámara de inspección<br />\
    <img src="styles/legend/ObrasProyectadas_3_1.png" /> Cámara especial<br />\
    <img src="styles/legend/ObrasProyectadas_3_2.png" /> Captación<br />\
    <img src="styles/legend/ObrasProyectadas_3_3.png" /> Colector<br />\
    <img src="styles/legend/ObrasProyectadas_3_4.png" /> Conexión colector existente<br />\
    <img src="styles/legend/ObrasProyectadas_3_5.png" /> Conexión sumidero<br />\
    <img src="styles/legend/ObrasProyectadas_3_6.png" /> Descarga<br />\
    <img src="styles/legend/ObrasProyectadas_3_7.png" /> Dirección<br />\
    <img src="styles/legend/ObrasProyectadas_3_8.png" /> Eje<br />\
    <img src="styles/legend/ObrasProyectadas_3_9.png" /> Mejoramiento terreno<br />\
    <img src="styles/legend/ObrasProyectadas_3_10.png" /> Sumidero<br />\
    <img src="styles/legend/ObrasProyectadas_3_11.png" /> Talud<br />\
    <img src="styles/legend/ObrasProyectadas_3_12.png" /> Tunnel liner<br />\
    <img src="styles/legend/ObrasProyectadas_3_13.png" /> Ventilación<br />\
    <img src="styles/legend/ObrasProyectadas_3_14.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_PuenteAlto_1.setVisible(true);lyr_LaFlorida_2.setVisible(true);lyr_ObrasProyectadas_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PuenteAlto_1,lyr_LaFlorida_2,lyr_ObrasProyectadas_3];
lyr_PuenteAlto_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_LaFlorida_2.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_ObrasProyectadas_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', });
lyr_PuenteAlto_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_LaFlorida_2.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_ObrasProyectadas_3.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', });
lyr_PuenteAlto_1.set('fieldLabels', {'CUT_REG': 'hidden field', 'CUT_PROV': 'hidden field', 'CUT_COM': 'hidden field', 'REGION': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'COMUNA': 'inline label - always visible', 'SUPERFICIE': 'hidden field', });
lyr_LaFlorida_2.set('fieldLabels', {'CUT_REG': 'hidden field', 'CUT_PROV': 'hidden field', 'CUT_COM': 'hidden field', 'REGION': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'COMUNA': 'inline label - always visible', 'SUPERFICIE': 'hidden field', });
lyr_ObrasProyectadas_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', });
lyr_ObrasProyectadas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});