class Ejercicio7{
    constructor(){
/*
        $(document).ready(function () {
            $('#editarH1').click(() => this.editarParrafo('#ph1','#tph1'));

        });
*/
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

/*
    sumarFilasYColumnas() {
        var filas = $('tr');
        for (let i = 0; i < filas.length; i++) {
            var columnas = $('td', filas.get(i));
            for (let j = 0; j < columnas.length; j++) {
                var celda = columnas.get(j);
                var valor = parseInt(celda.innerHTML);

            }
        }
    }
    */

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