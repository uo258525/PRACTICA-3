"use strict";
class GeoLocalizacion{
constructor(){
    this.markerWasCreated = false;
    navigator.geolocation.getCurrentPosition(this.getLocation.bind(this));
    
}


getLocation(posicion){
    this.longitud         = posicion.coords.longitude; 
    this.latitud          = posicion.coords.latitude;  
    this.precision        = posicion.coords.accuracy;
    this.altitud          = posicion.coords.altitude;
    this.precisionAltitud = posicion.coords.altitudeAccuracy;
    this.rumbo            = posicion.coords.heading;
    this.velocidad        = posicion.coords.speed; 
    this.createMarker();
}

createMarker() {
    if (this.markerWasCreated) return;
    if (!this.mapa || ! this.latitud || ! this.longitud) return;

    this.markerWasCreated = true;
    const center = {
        lat: parseFloat(this.latitud),
        lng: parseFloat(this.longitud)
    };
    const marker = new google.maps.Marker({
        position: center,
        map: this.mapa
    }); 
    this.mapa.setCenter(center);
}


initMap(){

    this.mapa = new google.maps.Map(document.getElementById('mapa'),
        {
            center: {
                lat: 43.362583,
                lng: -5.843081
            },
            zoom:12
        }
    );

    this.createMarker();

 }
}

var geo= new GeoLocalizacion();