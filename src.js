const calcularPorcentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {

    let porcentajeCO = limiteCO ? valorCO * 100 / limiteCO : 0;
    let porcentajeCO2= limiteCO2 ? valorCO2 * 100 / limiteCO2 : 0;
    let porcentajeHC = limiteHC ? valorHC * 100 / limiteHC : 0;
    let porcentajeO2 = limiteO2 ? valorO2 * 100 / limiteO2 : 0;

return {porcentajeCO,porcentajeCO2,porcentajeHC,porcentajeO2};
}

const registrarCO = (valorCO) => {
    let msg = (valorCO >= 0 && valorCO <= 10) ? 'Parametro CO en rango estandar' : (valorCO >= 11 && valorCO <= 15) ? 'Parametro CO fuera de rango' : 'fuera_de_rango';
    return msg;
}
module.exports.registrarCO = registrarCO;
module.exports.calcularPorcentajes = calcularPorcentajes;

const registrarCO2 = (valorCO2) => {
    let msg = (valorCO2 >= 0 && valorCO2 <= 20) ? 'Parametro CO2 en rango estandar' : (valorCO2 >= 21 && valorCO2 <= 30) ? 'Parametro CO2 fuera de rango' : 'fuera_de_rango';
    return msg;
}
module.exports.registrarCO2 = registrarCO2;
module.exports.calcularPorcentajes = calcularPorcentajes;

const registrarHC = (valorHC) => {
    let msg = (valorHC >= 0 && valorHC <= 10000) ? 'Parametro HC en rango estandar' : (valorHC >= 10001 && valorHC <= 11000) ? 'Parametro HC fuera de rango' : 'fuera_de_rango';
    return msg;
}
module.exports.registrarHC = registrarHC;
module.exports.calcularPorcentajes = calcularPorcentajes;

const registrarO2 = (valorO2) => {
    let msg = (valorO2 >= 0 && valorO2 <= 22) ? 'Parametro O2 en rango estandar' : (valorO2 >= 23 && valorO2 <= 30) ? 'Parametro O2 fuera de rango' : 'fuera_de_rango';
    return msg;
}
module.exports.registrarO2 = registrarO2;
module.exports.calcularPorcentajes = calcularPorcentajes;



global.rangosCO = [
    { etiqueta: 'Parametro CO en rango estandar', de: 0, hasta: 10 },
    { etiqueta: 'Parametro CO fuera de rango', de: 11, hasta: 15},
]
global.rangosCO2 = [
    { etiqueta: 'Parametro CO2 en rango estandar', de: 0, hasta: 20 },
    { etiqueta: 'Parametro CO2 fuera de rango', de: 21, hasta: 30},
]
global.rangosHC = [
    { etiqueta: 'Parametro HC en rango estandar', de: 0, hasta: 10000 },
    { etiqueta: 'Parametro HC fuera de rango', de: 10001, hasta: 11000},
]
global.rangosO2 = [
    { etiqueta: 'Parametro O2 en rango estandar', de: 0, hasta: 22 },
    { etiqueta: 'Parametro O2 fuera de rango', de: 23, hasta: 30},
]
