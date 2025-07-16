const Chismosa = require("./Chismosa");

class EstudiateEspia extends Chismosa{
    constructor(nombre, reputacion, nivelChisme){
        super(nombre, reputacion, nivelChisme)
    }

    recolectarInfo(){
        console.log("Lee chats ajenos desde el último puesto del salón"); 
    }
    contarChisme(){
        console.log("Filtra el chisme por estados en WhatsApp");
        
        const aumento = Math.floor(Math.random() * 5) + 2;
        this.nivelChisme += aumento

        this.reputacion -= 3

        console.log("EL nivel del Chisme es: "+ this.nivelChisme);
        console.log("La reputacion es: "+ this.reputacion);
        
    }

}

module.exports = EstudiateEspia;
