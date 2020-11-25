"use strict";
class MapaGeoJSON {
    constructor() {
        
    }


    init() {
        $("#fichero").empty();
        var file = $("#files").get(0).files[0];
        if (file.name.includes('.GeoJSON')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const map = new google.maps.Map(document.getElementById('mapa'), {
                    zoom: 4,
                    center:{
                        lat:43.36029,
                        lng: -5.843081
                    }
                });
                const json = JSON.parse(reader.result);
                map.data.addGeoJson(json);
            };
                
            reader.readAsText(file);

        } else {
            alert("Solo se permiten archivos GeoJSON. Inténtalo de nuevo.");
        }
    }

}
var mapa = new MapaGeoJSON();