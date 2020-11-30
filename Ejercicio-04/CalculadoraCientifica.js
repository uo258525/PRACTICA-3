"use strict";
class CalculadoraBasica {

    constructor() {
        this.registro = 0;
        this.pantalla = "0";
        this.updatePantalla();
        this.regex = /^\-?[0-9]+(.[0-9]+)?((\+|\-|\**|\*|\/)\-?[0-9]+(.[0-9]+)?)*$/;

    }

    digitos(digito) {
        if (this.pantalla === "0" || this.pantalla === "error") {
            this.pantalla = "" + digito;
            this.updatePantalla();
        }

        else {
            this.pantalla += "" + digito;
            this.updatePantalla();
        }
    }
    punto() {
        this.pantalla += ".";
        this.updatePantalla();
    }

    suma() {
        this.pantalla += "+";
        this.updatePantalla();
    }
    resta() {
        this.pantalla += "-";
        this.updatePantalla();
    }
    multiplicacion() {
        this.pantalla += "*";
        this.updatePantalla();
    }
    division() {
        this.pantalla += "/";
        this.updatePantalla();
    }
    mrc() {
        //Memory clear
        this.pantalla = "" + this.registro;//String
        this.updatePantalla();
        this.registro = 0;
    }
    mMenos() {
        //guarda digito para restar
        if (this.regex.test(this.pantalla)) {//evalua que lo que hay en la pantalla sea operacion matematica(boolean)
            try {
                var resultado = eval(this.pantalla);//ejecuta lo que hay en pantalla
                this.registro -= resultado;
                this.pantalla = "";
                this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }

    }
    mMas() {
        //guarda digito para sumar
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.registro += resultado;
            this.pantalla = "";
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }

    }
    borrar() {
        this.pantalla = "";
        this.updatePantalla();
    }
    igual() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = "" + resultado;
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }
    updatePantalla() {

        document.getElementById("pantalla").value = this.pantalla;

    }


}

class CalculadoraCientifica extends CalculadoraBasica {
    potenciaDos() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = Math.pow(resultado, 2);
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }

    potencia() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = resultado + "**"
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }
    seno() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = Math.sin(resultado);
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }
    arcoseno() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = Math.asin(resultado);
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }

    coseno() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = Math.cos(resultado);
            this.updatePantalla();
            } catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }
    arcocoseno() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = Math.acos(resultado);
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }


    tan() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = Math.tan(resultado);
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }
    arcotan() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = Math.atan(resultado);
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }
    sqrt() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = Math.sqrt(resultado);
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }
    potenciaDiez() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = Math.pow(10, resultado);
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }

    log() {
        if (this.regex.test(this.pantalla)) {
            try {
                var resultado = eval(this.pantalla);
                this.pantalla = Math.log(resultado);
                this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }
    logInv() {
        if (this.regex.test(this.pantalla)) {
            try {
                var resultado = eval(this.pantalla);
                this.pantalla = Math.pow(10, resultado);
                this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }
    exp() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = Math.exp(resultado)
            this.updatePantalla();
            }
             catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }
    mostrar(str) {
        this.pantalla += str;
        this.updatePantalla();
    }

    borrarFlecha() {
        if (this.regex.test(this.pantalla)) {
            if (this.pantalla.length >= 1) {
                this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
            }
        }
        this.updatePantalla();
    }

    mostrarPi() {
        this.pantalla = Math.PI;
        this.updatePantalla();
    }

    factorial() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = this._factorial(resultado)
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }
    _factorial(n) {
        if (n == 0)
            return 1;

        return n * this._factorial(n - 1);
    }
    cambiarSigno() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.pantalla = -(resultado);
            this.updatePantalla();
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
        else {
            this.pantalla = "error";
            this.updatePantalla();
        }
    }

    coma() {
        this.pantalla = ",";
        this.updatePantalla();
    }

    ms() {
        if (this.regex.test(this.pantalla)) {
            try{
            var resultado = eval(this.pantalla);
            this.registro = resultado;
            document.getElementById('mC').removeAttribute('disabled');
            document.getElementById('mr').removeAttribute('disabled');
            }
            catch (e) {
                this.pantalla = e.message;
                this.updatePantalla();
            }
        }
    }
    mc() {

        this.registro = 0;
    }
    mr() {
        //muestra en pantalla
        this.pantalla = "" + this.registro;
        this.updatePantalla();
    }

}

var calculadora = new CalculadoraCientifica();
