import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar is-success ">
        <div className="container">
          <div className="navbar-brand ">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/Plants" className="navbar-item">
              Plants
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
