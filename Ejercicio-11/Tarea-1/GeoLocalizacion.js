"use strict";
class GeoLocalizacion{
    constructor(){
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


}
var geo=new GeoLocalizacion();