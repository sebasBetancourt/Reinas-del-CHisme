const chalk = require('chalk');

const TiaVecina = require("./classes/TiaVecina")
const CompaneraCuriosa = require("./classes/CompaneraCuriosa")
const EstudiateEspia = require("./classes/EstudianteEspia")


const Chismosas = [
    new TiaVecina("Claudia", 3, 5),
    new TiaVecina("Esteban", 6, 2),
    new CompaneraCuriosa("Acercando", 1, 8),
    new TiaVecina("Daniel", 5, 5),
    new EstudiateEspia("Sebas", 2, 2),
];

const masFamosa = Chismosas.reduce((max, actual) => actual.reputacion > max.reputacion ? actual : max);
const masCancelada = Chismosas.reduce((min, actual) => actual.reputacion < min.reputacion ? actual : min);

console.log(chalk.bold("\n------------------------ ESTADÍSTICAS FINALES -----------------------\n"));

Chismosas.forEach((chismosa) => {
    let reputacionColor;

    if (chismosa.reputacion === masFamosa) {
        reputacionColor = chalk.hex("#FFA500"); 
    } else if (chismosa.reputacion === masCancelada) {
        reputacionColor = chalk.black; 
    } else {
        reputacionColor = chalk.white;
    }


    console.log(`
${chalk.bold(chismosa.nombre)} 
  Reputación: ${chismosa.reputacion}
  Nivel de Chisme: ${chismosa.nivelChisme}
    `);
});

const masViral = Chismosas.reduce((max, actual) => actual.nivelChisme > max.nivelChisme ? actual : max);

console.log(chalk.magenta.bold(`\nEl chisme más viral lo tiene: ${masViral.nombre} con nivel ${masViral.nivelChisme}`));

console.log(chalk.hex('#FFA500').bold(`La de reputación más alta es: ${masFamosa.nombre} con ${masFamosa.reputacion}`));
console.log(chalk.black.bold(`La de reputación más baja es: ${masCancelada.nombre} con ${masCancelada.reputacion}\n`));
