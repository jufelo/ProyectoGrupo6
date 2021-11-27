import 'bootstrap'
import Logo from './logo2.svg'
import './login.css'

export default function login() {
    return (
    <main class="form-signin text-center">
      <form>
        <img class="mb-4" src={Logo} alt="" width="72" height="auto" />
        <h1 class="h3 mb-3 fw-normal">Inicio Sesión</h1>
    
        <div class="mb-3 form-floating">
          <input type="text" class="form-control" id="floatingInput" placeholder="Usuario" />
          <label for="floatingInput">Usuario</label>
        </div>
        <div class="mb-3 form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Contraseña</label>
        </div>
    
        
        <button class="w-100 btn btn-lg btn-primary" type="submit">Iniciar Sesión</button>
        <p class="mt-5 mb-3 text-muted">Mintic-UPB Group-6 NRC-53844 2021</p>
      </form>
    </main>
    )
}

