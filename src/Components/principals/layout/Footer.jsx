import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-dark text-white container-fluid justify-content-center ">
      <p className="lead p-3 pr-5 row text-center"> Links de interes</p>
      <div className="row row-cols-lg-2 text-center ">
        <div class="list-group col ">
          <Link
            to="/about"
            class="list-group-item list-group-item-action active text-white bg-dark border-0 "
          >
            Acerca De
          </Link>
          <a
            href="#!"
            class="list-group-item list-group-item-action active bg-dark text-white border-0"
          >
            Facebook de la universidad
          </a>
          <a
            href="#!"
            class="list-group-item list-group-item-action bg-dark border-0 text-white active"
          >
            Revista Universo estudiantil
          </a>
          <a
            href="#!"
            class="list-group-item list-group-item-action bg-dark border-0 text-white active"
          >
            Cerrito Universitario
          </a>
        </div>
        <div class="list-group col">
          <p>Números de emergencia (Huajuapan y Acatlima)</p>
          <a
            href="tel:+9535320453"
            class="list-group-item list-group-item-action bg-dark font-weight-bold text-dark text-uppercase border-0 "
          >
            Ambulancias IMSS: <span className="text-white">953 532 0453</span>
          </a>
          <a
            href="tel:+9535300608"
            class="list-group-item list-group-item-action text-dark font-weight-bold text-uppercase active bg-dark border-0"
          >
            Policia municipal: <span className="text-white">953 530 0608</span>
          </a>
          <a
            href="tel:+9535320999"
            class="list-group-item list-group-item-action text-dark font-weight-bold text-uppercase bg-dark border-0 active"
          >
            Cruz Roja: <span className="text-white">953 532 0999</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
