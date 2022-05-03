import axios from "axios";
import { useHistory } from "react-router-dom";

export const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export function createAccount(name, password) {
  console.log(name, password);
  api
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

export async function handleLogin(name, password) {
  const result = await api
    .post(`user/login`, {
      name: name,
      pass: password,
    })
    .then(function (response) {
      const info = response.data;
      console.log(response.status);
      if (response.status == 200) {
        console.log("logou");
        return true;
      }
      return false;
    })
    .catch(function (error) {
      console.log(error);
      return false
    });

  return result;
}

export function handleGetSightings() {
  const mock = [
    { id: 1, lat: "-64.7418", lon: "46.0406", time: "12:00" },
    { id: 2, lat: "-64.7418", lon: "46.0406", time: "12:00" },
    { id: 3, lat: "-64.7418", lon: "46.0406", time: "12:00" },
    { id: 4, lat: "-64.7418", lon: "46.0406", time: "12:00" },
    { id: 5, lat: "-64.7418", lon: "46.0406", time: "12:00" },
    { id: 6, lat: "-64.7418", lon: "46.0406", time: "12:00" },
    { id: 7, lat: "-64.7418", lon: "46.0406", time: "12:00" },
  ];

  api
    .get(`api/ginfo`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return mock;
}
