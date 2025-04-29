var wms_layers = [];


        var lyr_BDOrthoIGN_0 = new ol.layer.Tile({
            'title': 'BDOrtho IGN',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });
var format_CommunautdeCommunesBrayEawy_1 = new ol.format.GeoJSON();
var features_CommunautdeCommunesBrayEawy_1 = format_CommunautdeCommunesBrayEawy_1.readFeatures(json_CommunautdeCommunesBrayEawy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunautdeCommunesBrayEawy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunautdeCommunesBrayEawy_1.addFeatures(features_CommunautdeCommunesBrayEawy_1);
var lyr_CommunautdeCommunesBrayEawy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunautdeCommunesBrayEawy_1, 
                style: style_CommunautdeCommunesBrayEawy_1,
                popuplayertitle: 'Communauté de Communes Bray-Eawy',
                interactive: true,
                title: '<img src="styles/legend/CommunautdeCommunesBrayEawy_1.png" /> Communauté de Communes Bray-Eawy'
            });
var format_CommunautdeCommunesdeLondinires_2 = new ol.format.GeoJSON();
var features_CommunautdeCommunesdeLondinires_2 = format_CommunautdeCommunesdeLondinires_2.readFeatures(json_CommunautdeCommunesdeLondinires_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunautdeCommunesdeLondinires_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunautdeCommunesdeLondinires_2.addFeatures(features_CommunautdeCommunesdeLondinires_2);
var lyr_CommunautdeCommunesdeLondinires_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunautdeCommunesdeLondinires_2, 
                style: style_CommunautdeCommunesdeLondinires_2,
                popuplayertitle: 'Communauté de Communes de Londinières',
                interactive: true,
                title: '<img src="styles/legend/CommunautdeCommunesdeLondinires_2.png" /> Communauté de Communes de Londinières'
            });
var format_CommunautdeCommunesdes4Rivires_3 = new ol.format.GeoJSON();
var features_CommunautdeCommunesdes4Rivires_3 = format_CommunautdeCommunesdes4Rivires_3.readFeatures(json_CommunautdeCommunesdes4Rivires_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunautdeCommunesdes4Rivires_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunautdeCommunesdes4Rivires_3.addFeatures(features_CommunautdeCommunesdes4Rivires_3);
var lyr_CommunautdeCommunesdes4Rivires_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunautdeCommunesdes4Rivires_3, 
                style: style_CommunautdeCommunesdes4Rivires_3,
                popuplayertitle: 'Communauté de Communes des 4 Rivières',
                interactive: true,
                title: '<img src="styles/legend/CommunautdeCommunesdes4Rivires_3.png" /> Communauté de Communes des 4 Rivières'
            });
var format_PETRduPaysdeBray_4 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_4 = format_PETRduPaysdeBray_4.readFeatures(json_PETRduPaysdeBray_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_4.addFeatures(features_PETRduPaysdeBray_4);
var lyr_PETRduPaysdeBray_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_4, 
                style: style_PETRduPaysdeBray_4,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: false,
                title: '<img src="styles/legend/PETRduPaysdeBray_4.png" /> PETR du Pays de Bray'
            });
var format_Communes_5 = new ol.format.GeoJSON();
var features_Communes_5 = format_Communes_5.readFeatures(json_Communes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_5.addFeatures(features_Communes_5);
var lyr_Communes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_5, 
                style: style_Communes_5,
                popuplayertitle: 'Communes',
                interactive: false,
                title: '<img src="styles/legend/Communes_5.png" /> Communes'
            });
var format_2024_6 = new ol.format.GeoJSON();
var features_2024_6 = format_2024_6.readFeatures(json_2024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_6.addFeatures(features_2024_6);
cluster_2024_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2024_6
});
var lyr_2024_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2024_6, 
                style: style_2024_6,
                popuplayertitle: '2024',
                interactive: true,
                title: '<img src="styles/legend/2024_6.png" /> 2024'
            });
var format_2023_7 = new ol.format.GeoJSON();
var features_2023_7 = format_2023_7.readFeatures(json_2023_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_7.addFeatures(features_2023_7);
var lyr_2023_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023_7, 
                style: style_2023_7,
                popuplayertitle: '2023',
                interactive: false,
                title: '<img src="styles/legend/2023_7.png" /> 2023'
            });
var format_2022_8 = new ol.format.GeoJSON();
var features_2022_8 = format_2022_8.readFeatures(json_2022_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_8.addFeatures(features_2022_8);
cluster_2022_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2022_8
});
var lyr_2022_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2022_8, 
                style: style_2022_8,
                popuplayertitle: '2022',
                interactive: true,
                title: '<img src="styles/legend/2022_8.png" /> 2022'
            });
var format_2021_9 = new ol.format.GeoJSON();
var features_2021_9 = format_2021_9.readFeatures(json_2021_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_9.addFeatures(features_2021_9);
cluster_2021_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2021_9
});
var lyr_2021_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2021_9, 
                style: style_2021_9,
                popuplayertitle: '2021',
                interactive: true,
                title: '<img src="styles/legend/2021_9.png" /> 2021'
            });
var group_Actionssubventionnesparanne = new ol.layer.Group({
                                layers: [lyr_2024_6,lyr_2023_7,lyr_2022_8,lyr_2021_9,],
                                fold: "open",
                                title: 'Actions subventionnées par année'});
var group_Limitesadministratives = new ol.layer.Group({
                                layers: [lyr_CommunautdeCommunesBrayEawy_1,lyr_CommunautdeCommunesdeLondinires_2,lyr_CommunautdeCommunesdes4Rivires_3,lyr_PETRduPaysdeBray_4,lyr_Communes_5,],
                                fold: "open",
                                title: 'Limites administratives'});

lyr_BDOrthoIGN_0.setVisible(true);lyr_CommunautdeCommunesBrayEawy_1.setVisible(true);lyr_CommunautdeCommunesdeLondinires_2.setVisible(true);lyr_CommunautdeCommunesdes4Rivires_3.setVisible(true);lyr_PETRduPaysdeBray_4.setVisible(true);lyr_Communes_5.setVisible(true);lyr_2024_6.setVisible(true);lyr_2023_7.setVisible(true);lyr_2022_8.setVisible(true);lyr_2021_9.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,group_Limitesadministratives,group_Actionssubventionnesparanne];
lyr_CommunautdeCommunesBrayEawy_1.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_CommunautdeCommunesdeLondinires_2.set('fieldAliases', {'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_CommunautdeCommunesdes4Rivires_3.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_PETRduPaysdeBray_4.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'layer': 'layer', 'path': 'path', });
lyr_Communes_5.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_2024_6.set('fieldAliases', {'fid': 'fid', 'Intitulé': 'Intitulé', 'Maître d\'ouvrage': 'Maître d\'ouvrage', 'Financement DETR': 'Financement DETR', 'Financement DSIL': 'Financement DSIL', 'Financement Département': 'Financement Département', 'mt_global': 'mt_global', 'Autofinancement': 'Autofinancement', 'Autres financements (Europe, Etat, Région...)': 'Autres financements (Europe, Etat, Région...)', 'Total subventions': 'Total subventions', 'Coût total de l\'opération': 'Coût total de l\'opération', });
lyr_2023_7.set('fieldAliases', {'fid': 'fid', 'Intitulé': 'Intitulé', });
lyr_2022_8.set('fieldAliases', {'fid': 'fid', 'Intitulé': 'Intitulé', 'Maître d\'ouvrage': 'Maître d\'ouvrage', 'Financement DETR': 'Financement DETR', 'Financement DSIL': 'Financement DSIL', 'Financement Département': 'Financement Département', 'mt_global': 'mt_global', 'Autofinancement': 'Autofinancement', 'Autres financements (Europe, Etat, Région...)': 'Autres financements (Europe, Etat, Région...)', 'Total subventions': 'Total subventions', 'Coût total de l\'opération': 'Coût total de l\'opération', });
lyr_2021_9.set('fieldAliases', {'fid': 'fid', 'Intitulé': 'Intitulé', 'Maître d\'ouvrage': 'Maître d\'ouvrage', 'Financement DETR': 'Financement DETR', 'Financement DSIL': 'Financement DSIL', 'Financement Département': 'Financement Département', 'Autofinancement': 'Autofinancement', 'Autres financements (Europe, Etat, Région...)': 'Autres financements (Europe, Etat, Région...)', 'Total subventions': 'Total subventions', 'Coût total de l\'opération': 'Coût total de l\'opération', });
lyr_CommunautdeCommunesBrayEawy_1.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_CommunautdeCommunesdeLondinires_2.set('fieldImages', {'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_CommunautdeCommunesdes4Rivires_3.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_PETRduPaysdeBray_4.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Communes_5.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_2024_6.set('fieldImages', {'fid': 'TextEdit', 'Intitulé': 'TextEdit', 'Maître d\'ouvrage': 'TextEdit', 'Financement DETR': 'TextEdit', 'Financement DSIL': 'TextEdit', 'Financement Département': 'TextEdit', 'mt_global': 'TextEdit', 'Autofinancement': 'TextEdit', 'Autres financements (Europe, Etat, Région...)': 'TextEdit', 'Total subventions': 'TextEdit', 'Coût total de l\'opération': 'TextEdit', });
lyr_2023_7.set('fieldImages', {'fid': 'TextEdit', 'Intitulé': 'TextEdit', });
lyr_2022_8.set('fieldImages', {'fid': 'TextEdit', 'Intitulé': 'TextEdit', 'Maître d\'ouvrage': 'TextEdit', 'Financement DETR': 'TextEdit', 'Financement DSIL': 'TextEdit', 'Financement Département': 'TextEdit', 'mt_global': 'TextEdit', 'Autofinancement': 'TextEdit', 'Autres financements (Europe, Etat, Région...)': 'TextEdit', 'Total subventions': 'TextEdit', 'Coût total de l\'opération': 'TextEdit', });
lyr_2021_9.set('fieldImages', {'fid': 'TextEdit', 'Intitulé': 'TextEdit', 'Maître d\'ouvrage': 'TextEdit', 'Financement DETR': 'TextEdit', 'Financement DSIL': 'TextEdit', 'Financement Département': 'TextEdit', 'Autofinancement': '', 'Autres financements (Europe, Etat, Région...)': 'TextEdit', 'Total subventions': 'TextEdit', 'Coût total de l\'opération': 'TextEdit', });
lyr_CommunautdeCommunesBrayEawy_1.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_CommunautdeCommunesdeLondinires_2.set('fieldLabels', {'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_CommunautdeCommunesdes4Rivires_3.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_PETRduPaysdeBray_4.set('fieldLabels', {'ID': 'no label', 'CODE_SIREN': 'no label', 'NATURE': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Communes_5.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_2024_6.set('fieldLabels', {'fid': 'hidden field', 'Intitulé': 'header label - visible with data', 'Maître d\'ouvrage': 'header label - visible with data', 'Financement DETR': 'header label - visible with data', 'Financement DSIL': 'header label - visible with data', 'Financement Département': 'header label - visible with data', 'mt_global': 'hidden field', 'Autofinancement': 'header label - visible with data', 'Autres financements (Europe, Etat, Région...)': 'header label - visible with data', 'Total subventions': 'header label - visible with data', 'Coût total de l\'opération': 'header label - visible with data', });
lyr_2023_7.set('fieldLabels', {'fid': 'hidden field', 'Intitulé': 'header label - visible with data', });
lyr_2022_8.set('fieldLabels', {'fid': 'hidden field', 'Intitulé': 'header label - visible with data', 'Maître d\'ouvrage': 'header label - visible with data', 'Financement DETR': 'header label - visible with data', 'Financement DSIL': 'header label - visible with data', 'Financement Département': 'header label - visible with data', 'mt_global': 'hidden field', 'Autofinancement': 'header label - visible with data', 'Autres financements (Europe, Etat, Région...)': 'header label - visible with data', 'Total subventions': 'header label - visible with data', 'Coût total de l\'opération': 'header label - visible with data', });
lyr_2021_9.set('fieldLabels', {'fid': 'hidden field', 'Intitulé': 'header label - visible with data', 'Maître d\'ouvrage': 'header label - visible with data', 'Financement DETR': 'header label - visible with data', 'Financement DSIL': 'header label - visible with data', 'Financement Département': 'header label - visible with data', 'Autofinancement': 'header label - visible with data', 'Autres financements (Europe, Etat, Région...)': 'header label - visible with data', 'Total subventions': 'header label - visible with data', 'Coût total de l\'opération': 'header label - visible with data', });
lyr_2021_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});