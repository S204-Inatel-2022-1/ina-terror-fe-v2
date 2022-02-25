import axios from "axios";
import { useHistory } from "react-router-dom";

export const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export function createAccount(name, password) {
  console.log(name, password);
  axios
    .post("api/info/", {
      user: name,
      password: password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log("rodou aqui");
}

export function handleLogin(name, password, history) {
  axios
    .get(`api/info/${name}?password=${password}`)
    .then(function (response) {
      const info = response.data;

      console.log(info);
      if (info.user == name) {
        console.log("true");
        history.push("/menu");
      }
    })
    .catch(function (error) {
      console.log(error);
      alert(error);
    });
    history.push("/menu");
}
