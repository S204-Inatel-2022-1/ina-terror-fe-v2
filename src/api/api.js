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

export async function handleGetSightings() {
  const data = await api
    .get(`user/sightings`)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });

  return data;
}
