import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white row justify-content-center">
        <p className='lead p-3 pr-5'> Links de interes</p>
        <div class="list-group offset-5 col-lg-5 col-sm-11 m-sm-0 bg-dark m-5">
        <a href="#" class="list-group-item list-group-item-action bg-dark border-0 disabled">
              BLOG
          </a>
          <a href="#" class="list-group-item list-group-item-action active bg-dark border-0">
            Facebook de la universidad
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-dark border-0 active">
            Revista Universo estudiantil
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-dark border-0 active">
            Cerrito Universitario
          </a>
          
         
        </div>
        
      
    </footer>
  );
};

export default Footer;
