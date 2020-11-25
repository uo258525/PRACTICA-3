"use strict";
class Tarea6 {
    constructor() {
        this.marcadores=[];


    }

    initMap() {

        this.map = new google.maps.Map(document.getElementById('mapa'),
            {
                center: {
                    lat: 43.362583,
                    lng: -5.843081
                },
                zoom: 12
            }
        );


    }
    crearMarcador() {
        const center = {
            lat: parseFloat($("#lat").val()),
            lng: parseFloat($("#long").val())
        };
        const marker = new google.maps.Marker({
            position: center,
            map: this.map
        });
        this.map.setCenter(center);
        this.marcadores.push(marker);
        if(this.marcadores.length>1){
            this.crearRuta();
        }
    

    }

    crearRuta() {
        
        {
            var ruta = new google.maps.Polyline({
                path: this.marcadores,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
        ruta.setMap(this.map);
        }

    }


}
var t6 = new Tarea6();