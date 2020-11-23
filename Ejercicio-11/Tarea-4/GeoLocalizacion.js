"use strict";
class GeoLocalizacion{

    constructor(){
        
    }


initMap(){


    const oviedo = {
        lat: 43.362583,
        lng: -5.843081
    };

    const mapaOviedo = new google.maps.Map(document.getElementById('mapa'),
        {
            center: oviedo,
            zoom:12
        }
    );
    const marker = new google.maps.Marker({
        position: oviedo,
        map: mapaOviedo
    });
}
}

var geo=new GeoLocalizacion();
