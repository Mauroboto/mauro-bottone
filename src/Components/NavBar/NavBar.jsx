import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <section>
      <div>
        <h1>
          <strong>SHOPIFUN</strong>
        </h1>
      </div>

      <nav>
        <ul id="menu">
          <li>
            <a href="../PERFUMERIA  BOTTONE/Index.html">HOME</a>
          </li>
          <li>
            <a href="../PERFUMERIA  BOTTONE/Pages/nosotros.html">Nosotros</a>
          </li>
          <li>
            <a href="../PERFUMERIA  BOTTONE/Pages/catalogo.html">Catalogo</a>
          </li>
          <li>
            <a href="../PERFUMERIA  BOTTONE/Pages/productos.html">Productos</a>
          </li>
          <li>
            <a href="../PERFUMERIA  BOTTONE/Pages/contacto.html">Contacto</a>
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
