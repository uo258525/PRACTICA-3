"use strict";
class MapaKML {
    constructor() {

    }
    initMap() {
        $("#fichero").empty();
        this.file = $("#files")[0].files[0];
        if (file.name.includes('.kml')) {
            const reader = new FileReader();
            reader.onload = () => {

                const map = new google.maps.Map(document.getElementById('mapa'), {
                    zoom: 12,
                });
                
            };
            reader.readAsText(file);

        } else {
            alert("Solo se permiten archivos KML. Inténtalo de nuevo.");
        }
    }

}
var mapa = new MapaKML();