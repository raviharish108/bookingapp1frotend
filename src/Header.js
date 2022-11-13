import {Link} from "react-router-dom";
export function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Hall Booking Application</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/createroom">for create Room</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/bookedroom" >Booked Room Data</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}
