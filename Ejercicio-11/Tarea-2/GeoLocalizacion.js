"use strict";
class GeoLocalizacion{
    constructor(){
        navigator.geolocation.getCurrentPosition(this.getLocation.bind(this), this.showErrors.bind(this));
        
    }


    getLocation(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed; 
}

showLocation(){
    var str="";
    str+="<p>Longitud: "+this.longitud +" grados</p>";
    str+="<p>Latitud: "+this.latitud  +" grados</p>";
    str+="<p>Precisión de la latitud y longitud: "+this.precision +" metros</p>";
    str+="<p>Altitud: "+this.altitud  +" metros</p>";
    str+="<p>Percisión de la altitud: "+this.precisionAltitud +" metros</p>";
    str+="<p>Rumbo: "+this.rumbo  +" grados</p>";
    str+="<p>Valocidad: "+this.velocidad +" metros/segundo</p>";
    document.getElementById("datos").innerHTML=str;

}

showErrors(error){
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("datos").innerHTML="El usuario no permite la petición de geolocalización";
          break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("datos").innerHTML="Información de geolocalización no disponible";
          break;
        case error.TIMEOUT:
            document.getElementById("datos").innerHTML="La petición de geolocalización ha caducado";
          break;
        case error.UNKNOWN_ERROR:
            document.getElementById("datos").innerHTML="Se ha producido un error desconocido";
          break;
    }

}


}
var geo=new GeoLocalizacion();