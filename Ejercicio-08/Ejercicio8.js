class Ejercicio8{
 constructor(){

 }

 cargarData(ciudad){
    $.ajax({
        dataType: "json",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad+ "&units=metric&lang=es&APPID=f499f85bbf4f894d24f3069097f23b78",
        method: 'GET',
        success: (data) => {
            this.verData(data);            
        },
        error:function(){
            document.write("Ha ocurrido un error");    
        }
    });
}

verData(data){
  
    var str="";
    str+="<img src=\"https://openweathermap.org/img/w/" + data.weather[0].icon  + ".png\" />";
    str+="<p>Ciudad: " + data.name +"</p>";
    str+="<p>País: " + data.sys.country + "</p>";
    str+="<p>Latitud: " + data.coord.lat + " grados</p>";
    str+="<p>Longitud: " + data.coord.lon + " grados</p>";
    str+="<p>Temperatura: " + data.main.temp + " ºC</p>";
    str+="<p>Temperatura máxima: " + data.main.temp_max + " ºC</p>";
    str+="<p>Temperatura mínima: " + data.main.temp_min + " ºC</p>";
    str+="<p>Presión: " + data.main.pressure + " milímetros</p>";
    str+="<p>Humedad: " + data.main.humidity + "%</p>"; 
    str+="<p>Amanece a las: " + new Date(data.sys.sunrise *1000).toLocaleTimeString() + "</p>"; 
    str+="<p>Oscurece a las: " + new Date(data.sys.sunset *1000).toLocaleTimeString() + "</p>"; 
    str+="<p>Dirección del viento: " + data.wind.deg + "  grados</p>";
    str+="<p>Velocidad del viento: " + data.wind.speed + " metros/segundo</p>";
    str+="<p>Hora de la medida: " + new Date(data.dt *1000).toLocaleTimeString() + "</p>";
    str+="<p>Fecha de la medida: " + new Date(data.dt *1000).toLocaleDateString() + "</p>";
    str+="<p>Descripción: " + data.weather[0].description + "</p>";
    str+="<p>Visibilidad: " + data.visibility + " metros</p>";
    str+="<p>Nubosidad: " + data.clouds.all + " %</p>";
    document.getElementById("datos").innerHTML = str;

}

}

var ej8=new Ejercicio8();