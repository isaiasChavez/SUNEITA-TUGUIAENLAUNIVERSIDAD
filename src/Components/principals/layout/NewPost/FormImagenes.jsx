import React, { useEffect, useState } from "react";
const FormImagenes = ({ onDataChange, dataFormulario, route, setProgreso }) => {
  const [imagenesState, setimagenes] = useState({
    imagenes: null,
    urls: [],
  });
  useEffect(() => {
    console.log("Lo que quiero", imagenesState.imagenes);
    setProgreso(90);
  }, [imagenesState.imagenes]);
  const onInputFormChange = async (e) => {
    if (e.target.files.length > 4) {
      alert("Selecciona solo 4 imagenes");
      return;
    }
    const data = e.target.files;
    setimagenes({ ...imagenesState, imagenes: data });

    console.log(e.target.files);

    let reader = new FileReader();
    let reader2 = new FileReader();
    let reader3 = new FileReader();
    let reader4 = new FileReader();
    let _urls = [];

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        _urls.push(reader.result);
        setimagenes({ ...imagenesState, urls: _urls, imagenes: data });
      };
    }
    if (e.target.files[1]) {
      reader2.readAsDataURL(e.target.files[1]);
      reader2.onload = function () {
        _urls.push(reader2.result);
        setimagenes({ ...imagenesState, urls: _urls, imagenes: data });
      };
    }
    if (e.target.files[2]) {
      reader3.readAsDataURL(e.target.files[2]);
      reader3.onload = function () {
        _urls.push(reader3.result);
        setimagenes({ ...imagenesState, urls: _urls, imagenes: data });
      };
    }
    if (e.target.files[3]) {
      reader4.readAsDataURL(e.target.files[3]);
      reader4.onload = function () {
        _urls.push(reader4.result);
        setimagenes({ ...imagenesState, urls: _urls, imagenes: data });
      };
    }
  };

  const onsubmitForm = (e) => {
    e.preventDefault();
    const medidasc = {
      target: {
        name: "imagenes",
        value: e.target[0].files,
      },
    };
    onDataChange(medidasc);

    route.push(`/crearPublicacion/confirm`);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center  justify-content-center">
      <div className="row  mt-5 pt-3  w-100">
        <div className="col col-10 offset-1  col-lg-4 ">
          <div className=" my-4 py-5 ">
            <h3 className="h3">Selecciona las imagenes a subir</h3>
            <p className="text-muted">Máximo 4</p>
          </div>
          <form action="" encType="multipart/form-data" onSubmit={onsubmitForm}>
            <div class="custom-file">
              <input
                type="file"
                accept="image/gif, image/png, image/jpeg"
                class="custom-file-input"
                id="customFile"
                name="imagenes"
                onChange={onInputFormChange}
                multiple
              />
              <label class="custom-file-label" for="customFile">
                <div className="">
                  {imagenesState.imagenes ? (
                    <p>
                      {imagenesState.imagenes.length} de 4 imagenes
                      seleccionadas
                    </p>
                  ) : (
                    "Seleccione 4 imagenes"
                  )}
                </div>
              </label>
            </div>
            <div className=" form-group my-5">
              {imagenesState.urls.length === 0 ? (
                <button
                  type="button"
                  className="btn btn-outline-dark btn-block disabled"
                  disabled
                >
                  Subir
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-outline-dark btn-block "
                >
                  Subir
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-7 ">
          <div className="row py-5  w-100  h-100 d-flex justify-content-around align-items-center ">
            {imagenesState.urls.map((imagen) => {
              return (
                <div className="col col-5 justify-content-center d-flex  align-items-center col-lg-5 m-2">
                  <img
                    src={imagen}
                    alt=""
                    className=" img-preview img-thumbnail"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormImagenes;
