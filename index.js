const TiaVecina = require("./classes/TiaVecina")
const CompaneraCuriosa = require("./classes/CompaneraCuriosa")
const EstudiateEspia = require("./classes/EstudianteEspia")


const Chismosas = [
    new TiaVecina("Claudia", 3, 5),
    new TiaVecina("Esteban", 6, 2),
    new CompaneraCuriosa("Acercando", 1, 8),
    new TiaVecina("Daniel", 5, 5),
    new EstudiateEspia("Sebas", 2, 2),
]

Chismosas.forEach((chismosa)=>{
    chismosa.recolectarInfo()
    chismosa.contarChisme()
})