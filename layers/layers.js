var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Provincias_1 = new ol.format.GeoJSON();
var features_Provincias_1 = format_Provincias_1.readFeatures(json_Provincias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_1.addFeatures(features_Provincias_1);
var lyr_Provincias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_1, 
                style: style_Provincias_1,
                interactive: true,
                title: '<img src="styles/legend/Provincias_1.png" /> Provincias'
            });
var format_Distritos_2 = new ol.format.GeoJSON();
var features_Distritos_2 = format_Distritos_2.readFeatures(json_Distritos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_2.addFeatures(features_Distritos_2);
var lyr_Distritos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Distritos_2, 
                style: style_Distritos_2,
                interactive: true,
                title: '<img src="styles/legend/Distritos_2.png" /> Distritos'
            });
var format_CentrosPoblados_3 = new ol.format.GeoJSON();
var features_CentrosPoblados_3 = format_CentrosPoblados_3.readFeatures(json_CentrosPoblados_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrosPoblados_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosPoblados_3.addFeatures(features_CentrosPoblados_3);
var lyr_CentrosPoblados_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentrosPoblados_3, 
                style: style_CentrosPoblados_3,
                interactive: true,
                title: '<img src="styles/legend/CentrosPoblados_3.png" /> Centros Poblados'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Provincias_1.setVisible(true);lyr_Distritos_2.setVisible(true);lyr_CentrosPoblados_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Provincias_1,lyr_Distritos_2,lyr_CentrosPoblados_3];
lyr_Provincias_1.set('fieldAliases', {'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', 'imagen': 'imagen', 'Cod': 'Cod', 'Peimetro': 'Peimetro', });
lyr_Distritos_2.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPART': 'DEPART', 'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'DIST_ID': 'DIST_ID', 'DISTRITO': 'DISTRITO', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', });
lyr_CentrosPoblados_3.set('fieldAliases', {'fid': 'fid', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'CODIGO': 'CODIGO', 'DIST_ID': 'DIST_ID', 'CCPP_ID Texto': 'CCPP_ID Texto', 'CCPP_ID': 'CCPP_ID', 'Centro Poblado': 'Centro Poblado', 'REGION NATURAL': 'REGION NATURAL', 'ALTITUD': 'ALTITUD', 'Total Poblacion Censada': 'Total Poblacion Censada', 'Hombres censados': 'Hombres censados', 'Mujeres censadas': 'Mujeres censadas', 'Total viviendas particulares': 'Total viviendas particulares', 'Viviendas ocupadas': 'Viviendas ocupadas', 'Viviendas desocupadas': 'Viviendas desocupadas', 'X_UTM': 'X_UTM', 'Y_UTM': 'Y_UTM', 'FUENTE': 'FUENTE', 'OBSERVACIONES': 'OBSERVACIONES', 'X_geo': 'X_geo', 'Y_geo': 'Y_geo', });
lyr_Provincias_1.set('fieldImages', {'PROV_ID': 'Hidden', 'PROVINCIA': 'TextEdit', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'Hidden', 'imagen': 'ExternalResource', 'Cod': 'Hidden', 'Peimetro': 'Hidden', });
lyr_Distritos_2.set('fieldImages', {'IDDPTO': 'Hidden', 'DEPART': 'Hidden', 'PROV_ID': 'Hidden', 'PROVINCIA': 'TextEdit', 'DIST_ID': 'Hidden', 'DISTRITO': 'TextEdit', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'Hidden', });
lyr_CentrosPoblados_3.set('fieldImages', {'fid': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'CODIGO': 'Hidden', 'DIST_ID': 'Hidden', 'CCPP_ID Texto': 'Hidden', 'CCPP_ID': 'Range', 'Centro Poblado': 'TextEdit', 'REGION NATURAL': 'Hidden', 'ALTITUD': 'Range', 'Total Poblacion Censada': 'Range', 'Hombres censados': 'Hidden', 'Mujeres censadas': 'Hidden', 'Total viviendas particulares': 'Hidden', 'Viviendas ocupadas': 'Hidden', 'Viviendas desocupadas': 'Hidden', 'X_UTM': 'Hidden', 'Y_UTM': 'Hidden', 'FUENTE': 'Hidden', 'OBSERVACIONES': 'Hidden', 'X_geo': 'Hidden', 'Y_geo': 'Hidden', });
lyr_Provincias_1.set('fieldLabels', {'PROVINCIA': 'no label', 'imagen': 'no label', });
lyr_Distritos_2.set('fieldLabels', {'PROVINCIA': 'no label', 'DISTRITO': 'no label', });
lyr_CentrosPoblados_3.set('fieldLabels', {'fid': 'no label', 'PROVINCIA': 'no label', 'DISTRITO': 'no label', 'CCPP_ID': 'no label', 'Centro Poblado': 'no label', 'ALTITUD': 'no label', 'Total Poblacion Censada': 'no label', });
lyr_CentrosPoblados_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});