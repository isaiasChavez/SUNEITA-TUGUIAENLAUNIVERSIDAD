import React from "react";
const DejaConsejo = () => {
  return (
    <>
      <div className="row d-flex justify-content-center pt-5">
        <form className="col-lg-8 mt-5 mb-5 bg-light p-5 rounded" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
          <div class="form-group">
            <label for="exampleInputEmail1" >Nombre</label>
            <input
              type="texgt"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" className='d-block'>Carrera</label>
            <input
              type="text"
              class="form-control w-50 d-inline"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              Nunca compartiremos tu email con nadie
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Instagram</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder='@'
            />
            
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Deja un texto que creas que le será de utilidad a las siguientes generaciones</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="form-group bg-secondary rounded p-4 text-white lead">
            <label for="">Lugar donde recomiendo rentar (opcional)</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Ejem: el pastel'></textarea>
            <label for="" className='font-weight-light d-block'>Dirección</label>
            <input
              type="text"
              class="form-control d-inline"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label for="" className='font-weight-light d-block'>Rango de precios</label>
            <input
              type="number"
              class="form-control w-50 d-inline"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <input
              type="number"
              class="form-control w-50 d-inline"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label for="exampleInputEmail1" className='font-weight-light '>Servicios que ofrecen</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label for="" className='font-weight-light '>Número de contacto</label>
            <input
              type='number'
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label for="" className='font-weight-light '>Número de contacto 2 (opcional)</label>
            <input
              type='number'
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              No olvides dejar una dirección, números de los caseros, rango de precios (o el tuyo) y los servicios que 
              ofrecen. Estoy seguro que existe un utemita que te lo agradecerá.  
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Lugares que recomiendo visitar (opcional)</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Estoy de acuerdo en compartir esto con otros utemitas
            </label>
          </div>

          <button type="submit" class="btn btn-primary">
            Ayudar
          </button>
        </form>
      </div>
    </>
  );
};

export default DejaConsejo;
