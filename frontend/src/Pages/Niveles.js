import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './niveles.css'

const porcentajeCO = 50;
const porcentajeCO2 = 22;
const porcentajeHC = 110;
const porcentajeO2 = 40;

export default function Niveles() {
    return (
        <div className="container pt-2 text-center">
            <h1 className="mb-5">Niveles de parámetros NTC-4983</h1>
            <div className="row">
                <div className="col border border-primary m-2">
                    <h5>CO</h5>
                    <CircularProgressbar value={porcentajeCO} text={`${porcentajeCO}%`} />;
                    <div className="alert alert-success">En rango estandar</div>
                </div>
                <div className="col border border-primary m-2">
                    <h5>CO2</h5>
                    <CircularProgressbar value={porcentajeCO2} text={`${porcentajeCO2}%`} />;
                    <div className="alert alert-success">En rango estandar</div>
                </div>
                <div className="col border border-primary m-2">
                    <h5>HC</h5>
                    <CircularProgressbar value={porcentajeHC} text={`${porcentajeHC}%`} />;
                    <div className="alert alert-danger">Fuera de rango</div>
                </div>
                <div className="col  border border-primary m-2">
                    <h5>O2</h5>
                    <CircularProgressbar value={porcentajeO2} text={`${porcentajeO2}%`} />;
                    <div className="alert alert-success">En rango estandar</div>
                </div>
            </div>
        </div>
    )
}
