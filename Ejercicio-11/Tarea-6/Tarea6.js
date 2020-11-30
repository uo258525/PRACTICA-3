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
        this.map.addListener('click', function(e) {
            t6.crearMarcadorClick(e.latLng)
         });


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
        this.marcadores.push(center);
        if(this.marcadores.length>1){
            this.crearRuta();
        }
    

    }

    crearMarcadorClick(coordenada){
        let pos = {
            lat: coordenada.lat(),
            lng:coordenada.lng()
        }
        const marker = new google.maps.Marker({
            position: pos,
            map: this.map
        });
        this.marcadores.push(pos);
        if(this.marcadores.length>1){
            this.crearRuta();
        }
}

    crearRuta() {
        
        {
            if (this.ruta) this.ruta.setMap(null);
            this.ruta = new google.maps.Polyline({
                path: this.marcadores,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
        this.ruta.setMap(this.map);
        }

    }


}
var t6 = new Tarea6();