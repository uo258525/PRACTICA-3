"use strict";
class Ejercicio12{
    constructor(){
        if (window.File && window.FileReader && window.FileList && window.Blob) {
           console.log("El navegador soporta el API File");
        } else {
            $("#fichero").html("<p>El navegador no soporta el API File y puede no funcionar correctamente</p>");
        }
    }

    mostrarContenido() {
        $("#fichero").empty();

        this.file = $("#files")[0].files[0];
        let reader = new FileReader();
        reader.onload = () =>this.onFileRead(reader.result);

        reader.readAsText(this.file, "UTF-8");
    }

    onFileRead(result) {

        let content = this.convertirXML(result);

        $("#fichero").html("<h2 id='content'>Contenido del fichero</h2>");
        $("#fichero").append("<p>" + content + "</p>")
    }

    convertirXML(content) {
        content = String(content).replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
        return content;
    }




}

var ej12=new Ejercicio12();