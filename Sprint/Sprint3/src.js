const calcularPocentajes = async (
    valorCO,
    valorCO2,
    valorHC,
    valorO2
) => {
    //make a fetch request to the api
    let response =await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    let limits = await response.json();

    let porcentajeCO = limits[0] ? valorCO * 100 / limits[0] : 0;
    let porcentajeCO2= limits[1] ? valorCO2 * 100 / limits[1] : 0;
    let porcentajeHC = limits[2] ? valorHC * 100 / limits[2] : 0;
    let porcentajeO2 = limits[3] ? valorO2 * 100 / limits[3] : 0;

    return {
        porcentajeCO,
        porcentajeCO2,
        porcentajeHC,
        porcentajeO2
    };
};

const registrarCO = async (valorCO) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangosCO = await response.json();
    let candidate = rangosCO[0]
    let Array = Object.values(candidate);
    console.log(candidate);
    console.log(Object.values(candidate));
    let etiqueta = (valorCO >= Array[1] && valorCO <= Array[2]) ? 'Parametro CO en rango estandar' : 'fuera_de_rango';
    return etiqueta;
};

const registrarCO2 = async (valorCO2) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangosCO2 = await response.json();
    let candidate = rangosCO2[1]
    let Array = Object.values(candidate);
    console.log(candidate);
    console.log(Object.values(candidate));
    let etiqueta = (valorCO2 >= Array[1] && valorCO2 <= Array[2]) ? 'Parametro CO2 en rango estandar' : 'fuera_de_rango';
    return etiqueta;
};

const registrarHC = async (valorHC) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangosHC = await response.json();
    let candidate = rangosHC[2]
    let Array = Object.values(candidate);
    console.log(candidate);
    console.log(Object.values(candidate));
    let etiqueta = (valorHC >= Array[1] && valorHC <= Array[2]) ? 'Parametro HC en rango estandar' : 'fuera_de_rango';
    return etiqueta;
};

const registrarO2 = async (valorO2) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangosO2 = await response.json();
    let candidate = rangosO2[3]
    let Array = Object.values(candidate);
    console.log(candidate);
    console.log(Object.values(candidate));
    let etiqueta = (valorO2 >= Array[1] && valorO2 <= Array[2]) ? 'Parametro O2 en rango estandar' : 'fuera_de_rango';;
    return etiqueta;
};

module.exports.registrarCO = registrarCO;
module.exports.registrarCO2 = registrarCO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarO2 = registrarO2;
module.exports.calcularPocentajes= calcularPocentajes;
