import axios from "axios";
// const axios = require('axios')

export const api = axios.create({
  // baseURL: "https://inaterror2.herokuapp.com",
  baseURL: "https://inaterror.herokuapp.com/",
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

export async function handlePostSighting(data) {
  const result = await api
    .post(`user/sightings`, data)
    .then(function (response) {
      if (response.status == 200) {
        return true;
      }
      return false;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });

  return result;
}

export async function handleGetOrb() {
  const result = await api
    .get(`user/orb`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });
    return result;
}
export async function handlePostOrb(data) {
  const result = await api
    .post(`user/orb`, data)
    .then(function (response) {
      if (response.status == 200) {
        return true;
      }
      return false;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });

  return result;
}