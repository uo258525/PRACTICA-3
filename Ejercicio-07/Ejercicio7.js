class Ejercicio7{
    constructor(){

    }

    editarParrafo(id,field){
        $(id).text($(field).val());
    }

    mostrarElemento(elemento){
        $(document).ready(function(){
            $(elemento).show();
        });

    }
    ocultarElemento(elemento){
        $(document).ready(function(){
            $(elemento).hide();
        });

    }
    eliminarElemento(elemento){
        $(document).ready(function(){
            $(elemento).remove();
        });

    }
    recorrer(){
        var file="";
        
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;

            file+= "<pre>Elemento: "+this+"\n";
            file+="Tipo de elemento: "+ this.tagName+"\n";
            file+="Padre :"  + etiquetaPadre +"\n";
            file+="\n</pre>";
        });
        document.getElementById("datos").innerHTML = file;
    }



    sumar(){
        var suma=0;
        var filas=$('td');
        for(let i=0;i<filas.length;i++){            
                var num = parseFloat(filas[i].innerHTML);
                if (!isNaN(num)) {
                    suma += num;
                }
        }

        document.getElementById('sum').value=""+suma;
    }

    addFooter(){
        var str="";
        str+="Esto es un footer";
        document.getElementById('footer').innerHTML=str; 
        this.ocultarElemento(document.getElementById('addFooter'));
    }

}
var ej7= new Ejercicio7();