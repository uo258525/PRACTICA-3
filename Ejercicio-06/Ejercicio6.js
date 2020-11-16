class Ejericio6{

    constructor(){
         this.digestedMap= new Map();
         this.burnedMap=new Map();
         
    }

    addCalories(id,cal){
        //de 100 en 100 gramos
        if(!this.digestedMap.has(id)){
            this.digestedMap.set(id,0);
        }
        this.digestedMap.set(id,this.digestedMap.get(id)+cal);

        document.getElementById(id).value=""+Math.round(100 * this.digestedMap.get(id) / cal) + " g";
    }

    removeCalories(id,cal){
        //de 100 en 100 gramos
        if(!this.digestedMap.has(id)){
            return;
        }
        var current=this.digestedMap.get(id);
        if(current===0){
            return;
        }
        else{
            this.digestedMap.set(id,current-cal);
        }
        
        document.getElementById(id).value=""+Math.round(100 * this.digestedMap.get(id) / cal) + " g";
    }

    addActivity(id,cal){
        //de 5 en 5 minutos
        //cal= kcal / (kg * min)
        if(!this.burnedMap.has(id)){
            this.burnedMap.set(id,0);
        }
        this.burnedMap.set(id,this.burnedMap.get(id)+cal * 5);

        document.getElementById(id).value=""+ Math.round(this.burnedMap.get(id) / cal) + " min"; // minutos

    }
    removeActivity(id,cal){
        //de 5 en 5 minutos

        if(!this.burnedMap.has(id)){
            return;
        }
        var current=this.burnedMap.get(id);
        if(current===0){
            return;
        }
        else{
            this.burnedMap.set(id,current-cal*5);
        }
        
        document.getElementById(id).value=""+ Math.round(this.burnedMap.get(id) / cal) + " min"; // minutos
    }

    calculate(){
        //var selectGenre = document.getElementById("selectGenre");

        //var edad = parseInt(document.getElementById("inputEdad").value);
        var altura = parseFloat(document.getElementById("inputAlt").value);
        var peso = parseFloat(document.getElementById("inputPeso").value);

        //console.log("Edad: " + edad);
        //console.log("Sexo: " + selectGenre.options[selectGenre.selectedIndex].text);
        console.log("Altura: " + altura);
        console.log("Peso: " + peso);

        var str = "";

        // IMC
        var imc = peso / (altura * altura);
        imc = Math.round(imc * 100) / 100.0;//redondear decimales
        str += "Índice de masa corporal: " + imc + " imc. ";


        // Kilo Calorias quemadas
        var digestedKiloCalories = 0;
        this.digestedMap.forEach(element => {
            digestedKiloCalories += element;
        });
        digestedKiloCalories /= 1000.0; // Paso de cal a kcal
        console.log("Digested: " + digestedKiloCalories);
        str += "Calorías ingeridas: " + digestedKiloCalories + " kcal. ";

        // Kilo Calorias quemadas
        var burnedKiloCalories = 0;
        this.burnedMap.forEach(element => {
            burnedKiloCalories += element;
        });
        burnedKiloCalories *= parseFloat(document.getElementById("inputPeso").value);
        console.log("Burned: " + burnedKiloCalories);
        console.log(this.burnedMap);
        str += "Calorías quemadas: " + burnedKiloCalories + " kcal. ";


        // Mostrar en pantalla
        document.getElementById("tituloResultados").innerHTML = "Resultados";
        document.getElementById("textoResultados").innerHTML = str;
    }

}
var calculadora = new Ejericio6();