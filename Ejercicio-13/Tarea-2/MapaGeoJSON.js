"use strict";
class MapaGeoJSON {
    constructor() {
        
    }


    init() {
        $("#fichero").empty();
        this.file = $("#files").get(0).files[0];
        if (this.file.name.includes('.GeoJSON')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const map = new google.maps.Map(document.getElementById('mapa'), {
                    zoom: 12,
                    center:{
                        lat:0,
                        lng: 0
                    }
                });
                const json = JSON.parse(reader.result);
                map.data.addGeoJson(json);
            };
                
            reader.readAsText(this.file);

        } else {
            alert("Solo se permiten archivos GeoJSON. Inténtalo de nuevo.");
        }
    }

}
var mapa = new MapaGeoJSON();