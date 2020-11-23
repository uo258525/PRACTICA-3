"use strict";
class MapaKML {
    constructor() {
        $('#files').change(() => this.loadFile());
    }

    initMap() {
        this.mapa = new google.maps.Map($('#mapa').get(0), {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 12,
        });

    }

    loadFile() {
        $("#fichero").empty();
        this.file = $("#files").get(0).files[0];
        if (this.file.name.includes('.kml')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result);
                var myParser = new geoXML3.parser({map: this.mapa});
                myParser.parseKmlString(reader.result);
            };
                
            reader.readAsText(this.file);

        } else {
            alert("Solo se permiten archivos KML. Inténtalo de nuevo.");
        }
    }

}
var mapa = new MapaKML();