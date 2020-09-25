import React, { useContext } from "react";
import { useEffect } from "react";
import AlertasContext from "../../State/alertas/alertasContext";
import { toast } from "react-toastify";
const Alert = () => {
  const { alerta } = useContext(AlertasContext);

  const config = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  useEffect(() => {
    if (alerta) {
      if (alerta.categoria === "error") {
        toast.error(alerta.msg, config);
        return;
      }
      if (alerta.categoria === "warning") {
        toast.warn(alerta.msg, config);
        return;
      }
      if (alerta.categoria === "success") {
        toast.success(alerta.msg, config);
        return;
      }
      toast(alerta.msg);
    }
  }, [alerta]);

  return null;
};

export default Alert;
