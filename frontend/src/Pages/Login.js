import Logo from './logo2.svg'
import './login.css'

export default function login() {
    return (
    <main className="form-signin text-center">
      <form>
        <img className="mb-4" src={Logo} alt="" width="72" height="auto" />
        <h1 className="h3 mb-3 fw-normal">Inicio Sesión</h1>
    
        <div className="mb-3 form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Usuario" />
          <label htmlFor="floatingInput">Usuario</label>
        </div>
        <div class="mb-3 form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
    
        <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar Sesión</button>
        <p className="mt-4 mb-3 text-muted">Mintic-UPB Group-6 NRC-53844 2021</p>
      </form>
    </main>
    )
}

