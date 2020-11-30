"use strict";
class MapaKML {
    constructor() {
        
    }

   

    loadFile() {
        $("#fichero").empty();
        this.file = $("#files").get(0).files[0];
        if (this.file.name.includes('.kml')) {


            const reader = new FileReader();
            reader.onloadend = () => {
                this.mapa = new google.maps.Map($('#mapa').get(0), {
                    center: {
                        lat: 0,
                        lng: 0
                    },
                    zoom: 12,
                });
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