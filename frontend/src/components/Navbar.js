import './navbar.css'

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="/login">Inicio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/parametros">Parámetros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/niveles">Niveles</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

