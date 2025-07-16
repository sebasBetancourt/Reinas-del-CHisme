const Chismosa = require("./Chismosa");

class TiaVecina extends Chismosa{
    constructor(nombre, reputacion, nivelChisme){
        super(nombre, reputacion, nivelChisme)
    }

    recolectarInfo(){
        console.log("Aprovecha la reunion del barrio para escuchar discretamente"); 
    }
    contarChisme(){
        console.log("Difunde el chisme mientras ofrece cafe");
        
        const aumento = Math.floor(Math.random() * 5) + 1;
        this.nivelChisme += aumento

        if(this.nivelChisme >= 8){
            this.reputacion += 4
        }

        console.log("EL nivel del Chisme es: "+ this.nivelChisme);
        console.log("La reputacion es: "+ this.reputacion);
        
    }

}

module.exports = TiaVecina;
