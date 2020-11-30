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
/*
        const kmlGoogleLayer = new google.maps.KmlLayer({
            url: "https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml",
            map: this.mapa
        });*/
    }

    loadFile() {
        $("#fichero").empty();
        this.file = $("#files").get(0).files[0];
        if (this.file.name.includes('.kml')) {

            /*
            const kmlLayer = new google.maps.KmlLayer({
                url: window.URL.createObjectURL(this.file),
                map: this.mapa
            });
            */

            const reader = new FileReader();
            reader.onloadend = () => {
                var latlngbounds = new google.maps.LatLngBounds();
                $('coordinates', reader.result)
                    .each((i,ele) => {
                        var coordenadas = $(ele).text().split('\n');
                        var puntos = [];
                        coordenadas.forEach((c) => {
                            var latlng = {
                                lng: parseFloat(c.split(',')[0]),
                                lat: parseFloat(c.split(',')[1]),
                            };
                            if (isNaN(latlng.lat) || isNaN(latlng.lng) )return;
                            console.log(latlng);
                            puntos.push(latlng);
                            latlngbounds.extend(latlng);
                        });
                        new google.maps.Polyline({
                            path: puntos,
                            map: this.mapa
                        });
                    });
                    this.mapa.fitBounds(latlngbounds);
                };
                
            reader.readAsText(this.file);
        } else {
            alert("Solo se permiten archivos KML. Inténtalo de nuevo.");
        }
    }

}
var mapa = new MapaKML();