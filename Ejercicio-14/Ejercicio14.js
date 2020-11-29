class Ejercicio14 {
    constructor() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            console.log("El navegador soporta el API File");
        } else {
            $("#fichero").html("<p>El navegador no soporta el API File y puede no funcionar correctamente</p>");
        }
    }

    toggleFullscreen() {
        var video = $("#myvideo")[0];
        if (!video.fullscreenElement) {
            video.requestFullscreen();
        }
        
    }

    cargarVideo() {

        this.file = $("#files")[0].files[0];
        var video = $("#myvideo")[0];
        video.src = window.URL.createObjectURL(this.file);
    }


    drop(ev) {
        ev.preventDefault();

        if (ev.dataTransfer.items) 
        {
            for (var i = 0; i < ev.dataTransfer.items.length; i++) 
            {
                // If dropped items aren't files, reject them
                console.log(ev.dataTransfer.items[i]);
                if (ev.dataTransfer.items[i].kind === 'file') 
                {
                    var file = ev.dataTransfer.items[i].getAsFile();
                    if (file.type.startsWith("video/"))
                    {
                        this.file = file;
                        var video = $("#myvideo")[0];
                        video.src = window.URL.createObjectURL(this.file);
                        $("#arrastrarResultado").html("Vídeo subido")
                    }
                }
            }
        }
    }
    allowDrop(ev) {
        ev.preventDefault();
    }

}

var ej14 = new Ejercicio14();

document.addEventListener("keydown", (e) => {
    if (e.key == "p")
        ej14.toggleFullscreen();
});