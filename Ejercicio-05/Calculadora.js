class CalculadoraRPN{
    constructor(){
        this.stack=[];
    }

    mostrarPantalla(num) {

        var display = document.getElementById("pantalla");
        if (display.value === '0') {
            display.value = num;
        } else {
            display.value += num;
        }

    }
    
    mostrarPila(){
        var result = "";
        for(let i = 0;i<this.stack.length;i++){
            console.log(result);
           result+=this.stack[i]+" ";
        }

        document.getElementById("pila").value=result;
    }
    addNumber(number) {
        if (Number.isNaN(number)) {
            alert('Dígito no válido');
        } else {
            this.stack.push(number);
        }
    }
    enviarAPila(){
        var value = document.getElementById("pantalla").value;
        if(this.stack.length==2){
            alert('Introduzca una operación');
        }else{
        this.addNumber(value);
        this.mostrarPila();
        document.getElementById("pantalla").value = 0;}
    }

    operador(operator) {
        var result = 0;
        if (this.stack.length >= 1) {
            switch (operator) {
                case 'sin':
                    result = Math.sin(this.stack.pop());
                    break;
                case 'cos':
                    result = Math.cos(this.stack.pop());
                    break;
                case 'tan':
                    result = Math.tan(this.stack.pop());
                    break;
                case 'pow2':
                    result=Math.pow(this.stack.pop(),2);
                    break;
                case 'log':
                    result=Math.log(this.stack.pop());
                    break;   
                default:
                    result = 0;
            }
            document.getElementById("pila").value = result;
            this.stack.push(result);
            document.getElementById("pantalla").value = 0;
        } else {
            alert('Operación no definida')
        }
    }

    operadorSimple(operation) {

        if (this.stack.length >= 2) {
            var left = this.stack.pop();
            var right = this.stack.pop();
            var result = eval(right + operation + left);
            this.stack.push(result);
            document.getElementById("pila").value = result;
        } else {
            alert('Introduzca otro número para operar');
        }
    }

    borrar(){
        this.stack = [];
        document.getElementById("pantalla").value = 0;
        document.getElementById("pila").value = 0;
    }



}

var calculadora = new CalculadoraRPN();