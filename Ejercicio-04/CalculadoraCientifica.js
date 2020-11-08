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
            this.updatePantalla(""+resultado);
           }
           else{
               this.updatePantalla("error");
           }
    }
  
    updatePantalla(valor){
        this.pantalla=valor;
        document.getElementById("pantalla").value=this.pantalla;

    }

  

}

class CalculadoraCientifica extends CalculadoraBasica{
    seno(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);            
            this.updatePantalla(""+ Math.sin(resultado));
           }
           else{
               this.updatePantalla("error");
           }
    }

    coseno(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);            
            this.updatePantalla(""+ Math.cos(resultado));
           }
           else{
               this.updatePantalla("error");
           }
    }

    
    tan(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);            
            this.updatePantalla(""+ Math.tan(resultado));
           }
           else{
               this.updatePantalla("error");
           }
    }
    
    factorial(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);            
            this.updatePantalla(""+ Math._factorial(resultado));
           }
           else{
               this.updatePantalla("error");
           }
    }
    _factorial(n){

    }
}


var calculadora=new CalculadoraCientifica();
document.getElementById("c").onclick = () => calculadora.borrar();
document.getElementById("div").onclick = () => calculadora.division();
document.getElementById("mul").onclick = () => calculadora.multiplicacion();
document.getElementById("minus").onclick = () => calculadora.resta();
document.getElementById("add").onclick = () => calculadora.suma();
document.getElementById("mrc").onclick = () => calculadora.mrc();
document.getElementById("mMenos").onclick = () => calculadora.mMenos();
document.getElementById("mMas").onclick = () => calculadora.mMas();
document.getElementById("equals").onclick = () => calculadora.igual();
document.getElementById("0").onclick = () => calculadora.digitos(0);
document.getElementById("1").onclick = () => calculadora.digitos(1);
document.getElementById("2").onclick = () => calculadora.digitos(2);
document.getElementById("3").onclick = () => calculadora.digitos(3);
document.getElementById("4").onclick = () => calculadora.digitos(4);
document.getElementById("5").onclick = () => calculadora.digitos(5);
document.getElementById("6").onclick = () => calculadora.digitos(6);
document.getElementById("7").onclick = () => calculadora.digitos(7);
document.getElementById("8").onclick = () => calculadora.digitos(8);
document.getElementById("9").onclick = () => calculadora.digitos(9);
document.getElementById("punto").onclick = () => calculadora.punto();
