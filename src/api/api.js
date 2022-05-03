import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export async function createAccount(name, password) {
  const result = await api
    .post("user/create", {
      name: name,
      pass: password,
    })
    .then(function (response) {
      return true
    })
    .catch(function (error) {
      console.log(error);
      return false
    });

  return result;
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
