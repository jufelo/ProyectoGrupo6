const calcularPorcentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {
    
    let porcentajeCO = limiteCO ? valorCO * 100 / limiteCO : 0;
    let porcentajeCO2 = limiteCO2 ? valorCO2 * 100 / limiteCO2 : 0;
    let porcentajeHC = limiteHC ? valorHC * 100 / limiteHC : 0;
    let porcentajeO2 = limiteO2 ? valorO2 * 100 / limiteO2 : 0;

    return {porcentajeCO, porcentajeCO2, porcentajeHC, porcentajeO2};
}
//console.log(calcularPorcentajes(10,20,10000,22,5,10,7000,11));

//console.log(JSON.stringify(calcularPorcentajes(10,20,10000,22,5,10,7000,11)));


const registrarCO = () => {
    if(value >= 0 && value <= 10){
        console.log('Parametro CO en rango estandard')
    }
    else{
        if(value >= 11 && value <= 15){
            console.log('Parametro CO fuera de rango')
        }
        else{
            console.log('Fuera de rango')
        }
    }
}

module.exports.registrarCO = registrarCO;

module.exports.calcularPorcentajes = calcularPorcentajes;

const registrarCO2 = (value) => {

}
module.exports.registrarCO2 = registrarCO2;
module.exports.calcularPorcentajes = calcularPorcentajes;

const registrarHC = (value) => {

}
module.exports.registrarHC = registrarHC;
module.exports.calcularPorcentajes = calcularPorcentajes;

const registrarO2 = (value) => {

}
module.exports.registrarO2 = registrarO2;
module.exports.calcularPorcentajes = calcularPorcentajes;



global.rangosCO = [
    { etiqueta: 'Parametro CO en rango estandard', de: 0, hasta: 10 },
    { etiqueta: 'Parametro CO fuera de rango', de: 11, hasta: 15},
]
global.rangosCO2 = [
    { etiqueta: 'Parametro CO2 en rango estandard', de: 0, hasta: 20 },
    { etiqueta: 'Parametro CO2 fuera de rango', de: 21, hasta: 30},
]
global.rangosHC = [
    { etiqueta: 'Parametro HC en rango estandard', de: 0, hasta: 10000 },
    { etiqueta: 'Parametro HC fuera de rango', de: 10001, hasta: 11000},
]
global.rangosO2 = [
    { etiqueta: 'Parametro O2 en rango estandard', de: 0, hasta: 22 },
    { etiqueta: 'Parametro O2 fuera de rango', de: 23, hasta: 30},
]
