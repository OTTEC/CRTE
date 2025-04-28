var size = 0;
var placement = 'point';

var style_2024_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000"; // Texte noir (couleur d'origine)
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "center";
    var offsetX = 15;
    var offsetY = 10;
    var feature;
    var value;
    var clusteredFeatures = feature.get("features");
    size = clusteredFeatures.length;
    
    if (size == 1) { // Si cluster d'une seule feature
        var feature = clusteredFeatures[0];
        value = clusteredFeatures[0].get("");
        if ("" !== null) {
            labelText = String("");
        }
    } else { // Si cluster de plusieurs features
        labelText = size.toString();
        var radius = Math.max(12, 6 + Math.log(size) * 5);
        
        // Couleurs fixes avec #ff4a47
        var color = 'rgba(84, 176, 74, 1)'; // Vert plein à 100% opacité
        var haloColor = 'rgba(84, 176, 74, 0.3)'; // Halo plus transparent

        return [
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: radius + 4,
                    fill: new ol.style.Fill({
                        color: haloColor
                    })
                })
            }),
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: radius,
                    fill: new ol.style.Fill({
                        color: color
                    })
                }),
                text: new ol.style.Text({
                    font: labelFont,
                    text: labelText,
                    fill: new ol.style.Fill({
                        color: labelFill
                    }),
                    placement: placement
                })
            })
        ];
    }

    // Style pour les points isolés (1 seul élément)
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({
            radius: 9.2 + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
                color: 'rgba(61,128,53,1.0)', 
                lineDash: null, 
                lineCap: 'butt', 
                lineJoin: 'miter', 
                width: 1.52
            }),
            fill: new ol.style.Fill({
                color: 'rgba(84, 176, 74, 1)'
            })
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
