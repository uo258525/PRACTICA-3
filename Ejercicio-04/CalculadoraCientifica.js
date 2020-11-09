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
               this.updatePantalla("error");
           }

    }
    borrar(){
        this.updatePantalla("");
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
    potenciaDos(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);            
            this.updatePantalla(""+ Math.pow(2,resultado));
           }
           else{
               this.updatePantalla("error");
           }
    }

    potencia(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);            
            this.updatePantalla( "**");
           }
           else{
               this.updatePantalla("error");
           }
    }
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
    sqrt(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);            
            this.updatePantalla(""+ Math.sqrt(resultado));
           }
           else{
               this.updatePantalla("error");
           }
    }
    potenciaDiez(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);            
            this.updatePantalla(""+ Math.pow(10,resultado));
           }
           else{
               this.updatePantalla("error");
           }
    }

    log(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);            
            this.updatePantalla(""+ Math.log(resultado));
           }
           else{
               this.updatePantalla("error");
           }
    }
    exp(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);            
            this.updatePantalla(""+ Math.exp(resultado));
           }
           else{
               this.updatePantalla("error");
           }
    }
    mostrar(str){
        this.updatePantalla(""+str);
    }
    borrarCE(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);
            if(resultado!=0){
                if(resultado.length===1){
                    resultado=0;
                }
                else{
                    resultado=rsultado.substring(0,resultado.length-1);
                } 
            }            
           }
          this.updatePantalla(); 

    }
    mostrarPi(){
        this.updatePantalla(""+Math.PI);
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
        if (n == 0)
            return 1;

        return n * this._factorial(n - 1);
    }
    cambiarSigno(){
        if(this.regex.test(this.pantalla)){
            var resultado=eval(this.pantalla);            
            this.updatePantalla(""+ -(resultado));
           }
           else{
               this.updatePantalla("error");
           }  
    }

    coma(){
        this.updatePantalla(",");
    }
   
}

var calculadora=new CalculadoraCientifica();
