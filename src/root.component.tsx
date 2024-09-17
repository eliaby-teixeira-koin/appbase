import { navigateToUrl } from 'single-spa'

export default function Root(props) {
  return (
    <section className="container-fluid d-flex justify-content-center bg-light bg-light border-bottom">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Poc MFE</a>
          <button className="navbar-toggler"
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-between gap-4">
              <li className="nav-item">
                <button type="button" className="btn btn-sm btn-link" onClick={() => navigateToUrl('/')}>Root</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-sm btn-link" onClick={() => navigateToUrl('/app1')}>App 1</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-sm btn-link" onClick={() => navigateToUrl('/app2')}>App 2</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-sm btn-link" onClick={() => navigateToUrl('/app3')}>App 3</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
