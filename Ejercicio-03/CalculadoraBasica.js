//CalculadoraBasica.js
/*Version 1.0. 04/11/2020.Elena Díaz Gutiérrez. Universidad de Oviedo*/
class CalculadoraBasica{

    constructor(){
        this.registro=0;
        this.pantalla="";
        this.updatePantalla();
        this.regex = /^\-?[0-9]+(.[0-9]+)?((\+|\-|\*|\/)\-?[0-9]+(.[0-9]+)?)*$/;

    }

    digitos(digito){
        this.pantalla+=digito;
        this.updatePantalla();
    }
    punto(){
        this.pantalla+=".";
        this.updatePantalla();
    }

    suma(){
        this.pantalla+="+";
        this.updatePantalla();
    }
    resta(){
        this.pantalla+="-";
        this.updatePantalla();
    }
    multiplicacion(){
        this.pantalla+="*";
        this.updatePantalla();
    }
    division(){
        this.pantalla+="/";
        this.updatePantalla();
    }
    mrc(){
        //Memory clear
        this.pantalla="" + this.registro;//String
        this.updatePantalla();
        this.registro=0;
    }
    mMenos(){
        //guarda digito para restar
        if(this.regex.test(this.pantalla)){//evalua que lo que hay en la pantalla sea operacion matematica(boolean)
         var resultado=eval(this.pantalla);//ejecuta lo que hay en pantalla
         this.registro-=resultado;
         this.pantalla="";
         this.updatePantalla();
        }
        else{
            this.pantalla="error";
            this.updatePantalla();
        }

    }
    mMas(){
        //guarda digito para sumar
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);
            this.registro+=resultado;
            this.pantalla="";
            this.updatePantalla();
           }
           else{
               this.pantalla="error";
               this.updatePantalla();
           }

    }
    borrar(){
        this.pantalla="";
        this.updatePantalla();
    }
    igual(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);
            this.pantalla=""+resultado;
            this.updatePantalla();
           }
           else{
               this.pantalla="error";
               this.updatePantalla();
           }
    }
    updatePantalla(){

        document.getElementById("pantalla").value=this.pantalla;

    }

  

}
var calculadora=new CalculadoraBasica();
