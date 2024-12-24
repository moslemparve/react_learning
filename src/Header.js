import { Link } from 'react-router-dom';

function Header() {
  return (
    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><Link to="/" class="nav-link active" aria-current="page">Home</Link></li>
        <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
        <li class="nav-item"><Link to="/contact" class="nav-link">Contact</Link></li>
      </ul>
    </header>
  </div>
  );
}

export default Header;
