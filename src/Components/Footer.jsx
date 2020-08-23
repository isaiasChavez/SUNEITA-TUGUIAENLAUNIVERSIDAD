import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white container-fluid justify-content-center ">
      <p className="lead p-3 pr-5 row text-center"> Links de interes</p>
      <div className="row row-cols-lg-2 text-center ">
        <div class="list-group col">
          <a
            href="#!"
            class="list-group-item list-group-item-action bg-dark border-0 disabled"
          >
            BLOG
          </a>
          <a
            href="#!"
            class="list-group-item list-group-item-action active bg-dark border-0"
          >
            Facebook de la universidad
          </a>
          <a
            href="#!"
            class="list-group-item list-group-item-action bg-dark border-0 active"
          >
            Revista Universo estudiantil
          </a>
          <a
            href="#!"
            class="list-group-item list-group-item-action bg-dark border-0 active"
          >
            Cerrito Universitario
          </a>
        </div>
        <div class="list-group col">
          <p>Números de emergencia (Huajuapan y Acatlima)</p>
          <a
            href="#!"
            class="list-group-item list-group-item-action bg-dark text-info text-uppercase border-0 "
          >
            Ambulancias IMSS: <span className="text-white">9511212345</span>
          </a>
          <a
            href="#!"
            class="list-group-item list-group-item-action text-info text-uppercase active bg-dark border-0"
          >
            Policia municipal: <span className="text-white">9511212345</span>
          </a>
          <a
            href="#!"
            class="list-group-item list-group-item-action text-info text-uppercase bg-dark border-0 active"
          >
            Cruz Roja: <span className="text-white">9511212345</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
