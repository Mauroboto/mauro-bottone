import CartWidget from "./CartWidget";
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section>
      <div>
        <h1>
          <strong>SHOPIFUN</strong>
        </h1>
      </div>

      <nav>
        <ul className="menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/category/Panaderia">Panaderia</Link>
          </li>
          <li>
            <Link to="/category/Frutas">Frutas</Link>
          </li>
          <li>
            <Link to={"/category/Alimentos"}>Alimentos</Link>
          </li>
          <li>
            <a href="/">Contacto</a>
            <ul>
              <h2>Nuestras redes</h2>
              <li>
                <a href="https://es-la.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com/">Instagram</a>
              </li>
              <li>
                <a href="https://twitter.com/">Twitter</a>
              </li>
              <h2>Nuestros telefonos</h2>
              <li>011-1234-5678</li>
              <li>
                <a href="mailto:PerfumeriaMiri@gmail.com.ar">
                  Mandanos un E-mail
                </a>
              </li>
            </ul>
          </li>
          <li className="CartWidget">
            <CartWidget />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
