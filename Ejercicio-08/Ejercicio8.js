class Ejercicio8{
 constructor(){

 }

 cargarData(ciudad){
    $.ajax({
        dataType: "json",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad+ "&units=metric"+"&lang=es"+"&APPID="+"f499f85bbf4f894d24f3069097f23b78",
        method: 'GET',
        success: function(data){
            verData(data);            
        },
        error:function(){
            document.write("Ha ocurrido un error");    
        }
    });
}

verData(data){
    document.write("<h2>Datos</h2>")
    document.write("<p>Ciudad: " + data.name + "</p>");
    document.write("<p>País: " + data.sys.country + "</p>");
    document.write("<p>Latitud: " + data.coord.lat + " grados</p>");
    document.write("<p>Longitud: " + data.coord.lon + " grados</p>");
    document.write("<p>Temperatura: " + data.main.temp + " ºC</p>");
    document.write("<p>Temperatura máxima: " + data.main.temp_max + " ºC</p>");
    document.write("<p>Temperatura mínima: " + data.main.temp_min + " ºC</p>");
    document.write("<p>Presión: " + data.main.pressure + " milímetros</p>");
    document.write("<p>Humedad: " + data.main.humidity + "%</p>"); 
    document.write("<p>Amanece a las: " + new Date(data.sys.sunrise *1000).toLocaleTimeString() + "</p>"); 
    document.write("<p>Oscurece a las: " + new Date(data.sys.sunset *1000).toLocaleTimeString() + "</p>"); 
    document.write("<p>Dirección del viento: " + data.wind.deg + "  grados</p>");
    document.write("<p>Velocidad del viento: " + data.wind.speed + " metros/segundo</p>");
    document.write("<p>Hora de la medida: " + new Date(data.dt *1000).toLocaleTimeString() + "</p>");
    document.write("<p>Fecha de la medida: " + new Date(data.dt *1000).toLocaleDateString() + "</p>");
    document.write("<p>Descripción: " + data.weather[0].description + "</p>");
    document.write("<p>Visibilidad: " + data.visibility + " metros</p>");
    document.write("<p>Nubosidad: " + data.clouds.all + " %</p>");

}


}

var ej8=new Ejercicio8();