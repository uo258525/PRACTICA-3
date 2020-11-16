class Ejercicio9{
    constructor(){
   
    }
   
    cargarData(ciudad){
       $.ajax({
           dataType: "xml",
           url: "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad+ "&mode=xml&units=metric&lang=es&APPID=f499f85bbf4f894d24f3069097f23b78",
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
       str+="<img src=\"https://openweathermap.org/img/w/" +  $('weather',data).attr("icon") + ".png\" />";
       str+="<p>Número de elementos xml: " + $('*',data).length + "</p>";
       str+="<p>Ciudad: " + $('city',data).attr("name") +"</p>";
       str+="<p>País: " + $('country',data).text() + "</p>";
       str+="<p>Latitud: " + $('coord',data).attr("lat"); + " grados</p>";
       str+="<p>Longitud: " + $('coord',data).attr("lon"); + " grados</p>";
       str+="<p>Temperatura: " + $('temperature',data).attr("value") + " ºC</p>";
       str+="<p>Temperatura máxima: " +$('temperature',data).attr("max") + " ºC</p>";
       str+="<p>Temperatura mínima: " + $('temperature',data).attr("min") + " ºC</p>";
       str+="<p>Temperatura (unidades): " +$('temperature',data).attr("unit")  + "</p>";
       str+="<p>Presión: " + $('pressure',data).attr("value") + " hPa</p>";
       str+="<p>Humedad: " + $('humidity',data).attr("value") + "%</p>"; 
       str+="<p>Amanece a las: " + new Date($('sun',data).attr("rise")).toLocaleTimeString()+ "</p>"; 
       str+="<p>Oscurece a las: " +new Date($('sun',data).attr("set")).toLocaleTimeString() + "</p>"; 
       str+="<p>Velocidad del viento: " +$('speed',data).attr("value")+ " metros/segundo</p>";
       str+="<p>Nombre del viento: " + $('speed',data).attr("name")+ "  </p>";
       str+="<p>Dirección del viento: " + $('direction',data).attr("value") + "  grados</p>";
       str+="<p>Nubosidad: " + $('clouds',data).attr("value") + "</p>";
       str+="<p>Nombre nubosidad: " + $('clouds',data).attr("name") + "</p>";
       str+="<p>Visibilidad: " + $('visibility',data).attr("value") + " metros</p>";
       str+="<p>Precipitación valor: " + $('precipitation',data).attr("value") + "</p>";
       str+="<p>Precipitación modo: " + $('precipitation',data).attr("mode") + "</p>";
       str+="<p>Descripción: " + $('weather',data).attr("value") + "</p>";
       str+="<p>Hora de la medida: " +new Date($('lastupdate',data).attr("value")).toLocaleTimeString() + "</p>";
       str+="<p>Fecha de la medida: " +new Date($('lastupdate',data).attr("value")).toLocaleDateString() + "</p>";
        document.getElementById("datos").innerHTML = str;
   
   }
   
}
   
var ej9=new Ejercicio9();
