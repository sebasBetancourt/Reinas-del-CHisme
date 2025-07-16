const Chismosa = require("./Chismosa");

class CompaneraCuriosa extends Chismosa{
    constructor(nombre, reputacion, nivelChisme){
        super(nombre, reputacion, nivelChisme)
    }

    recolectarInfo(){
        console.log("Hace preguntas aparentemente profesionales a los compañeros de trabajo");
    }
    contarChisme(){
        console.log("Comenta el chisme como ejemplo de vida en el trabajo");
        
        const aumento = Math.floor(Math.random() * 5) + 1;
        this.reputacion += aumento

        this.nivelChisme += 2

        console.log("EL nivel del Chisme es: "+ this.nivelChisme);
        console.log("La reputacion es: "+ this.reputacion);
        
    }
}

module.exports = CompaneraCuriosa;
