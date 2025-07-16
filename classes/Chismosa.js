
class Chismosa{
    #reputacion;
    #nivelChisme;
    constructor(nombre, reputacion, nivelChisme){
        if (this.constructor === Chismosa){
            throw new Error("No se puede instanciar la clase abstracta Chismosa")
        }
        this.nombre = nombre;
        this.reputacion = reputacion;
        this.nivelChisme = nivelChisme;
    }


    recolectarInfo(){
        throw new Error("No se puede recolectar chisme, debes utilizar el metodo adecuado")
    }
    contarChisme(){
        throw new Error("No se puede contar chisme, debes utilizar el metodo adecuado")
    }

    get reputacion(){
        return this.#reputacion
    }
    get nivelChisme(){
        return this.#nivelChisme
    }
    set reputacion(valor) {
        this.#reputacion = Math.min(Math.max(0, valor), 10);
      }
    set nivelChisme(valor) {
        this.#nivelChisme = Math.min(Math.max(0, valor), 10);
      }
}

module.exports = Chismosa;