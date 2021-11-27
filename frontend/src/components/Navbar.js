import './navbar.css'

export default function navbar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
      <div class="container-fluid">
        <a class="navbar-brand" href="/login">Inicio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/parametros">Parámetros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/niveles">Niveles</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

