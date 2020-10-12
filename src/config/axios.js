import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://suneitaapp.herokuapp.com",
});

export default clienteAxios;
