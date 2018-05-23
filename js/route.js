/**
 * SVG path for target icon
 */
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * SVG path for plane icon
 */
var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

/**
 * Create the map
 */
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
"theme": "dark",


  "dataProvider": {
    "map": "worldLow",
    "zoomLevel": 5,
    "zoomLongitude":  109.0196210,
    "zoomLatitude": 6.4496777,

    "lines": [ {
      "id": "line1",
      "arc": -0.6,
      "alpha": 1,
      /*порядок полёта самолётика*/  
      "latitudes": [ -6.195485, 1.440244, 3.138835, 13.787998,11.563086,22.440654,  20.947115,18.952032],
      "longitudes": [ 106.849483, 103.841351, 101.686874, 100.63296, 104.887403,114.119318,105.817327,102.662221]
     
    }, {
      "id": "line2",
      "alpha": 0,
      "color": "#000000",
    "latitudes": [ -6.195485, 1.440244, 101.686874, 100.632961,104.887403,114.119318 ],
      "longitudes": [ 106.849483, 103.841351, -91.748957, -87.766751, -77.435634,-46.633309 ]
    } ],
    "images": [  {
      "svgPath": targetSVG,
      "title": "Jakarta",
      "latitude": -6.195485,
      "longitude": 106.849483
    },{
      "svgPath": targetSVG,
      "title": "Singapore",
      "latitude": 1.440244,
      "longitude": 103.841351
    },
    {
    "title": "Kuala Lumpur",
      "svgPath": targetSVG,
      "latitude": 3.138835,
      "longitude": 101.686874
    },{
        "title": "Bangkok",
      "svgPath": targetSVG,
      "latitude": 13.787998,
      "longitude": 100.632961
    },{
        "title": "Pneh",
      "svgPath": targetSVG,
      "latitude": 11.563086,
      "longitude": 104.887403
    },{
        "title": "Hongkong",
      "svgPath": targetSVG,
      "latitude": 22.440654,
      "longitude": 114.119318
    },{
        "title": "Hanoi",
      "svgPath": targetSVG,
      "latitude": 20.947115,
      "longitude": 105.817327
    },{
        "title": "Viang",
      "svgPath": targetSVG,
      "latitude": 18.952032,
      "longitude": 102.662221
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#095493",
      "alpha": 0.1,
      "animateAlongLine": true,
      "lineId": "line2",
      "flipDirection": true,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.3
    }, {
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#095493",
      "animateAlongLine": true,
      "lineId": "line1",
      "flipDirection": true,
      "loop": true,
      "scale": 0.02,
      "positionScale": 1.8
    } ]
  },

  "areasSettings": {
    color : "#B4B4B7",
    "outlineColor" : "#666666",
     " colorSolid" : "#84ADE9",
    "selectedColor" : "#84ADE9",
    "rollOverColor" : "#9EC2F7",
    "rollOverOutlineColor" : "#000000"
  },

  "imagesSettings": {
    "color": "#095493",
    "rollOverColor": "#095493",
    "selectedColor": "#095493",
    "pauseDuration": 0.2,
    "animationDuration": 8,
    "adjustAnimationSpeed": true
  },

  "linesSettings": {
    "color": "#88D1F2",
    "alpha": 2
  },

  "export": {
    "enabled": true
  }

} );