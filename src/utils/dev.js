const axios = require("axios");

class Control {
  constructor() {}

  test() {
    return "sim"
  }

  postUser(name, password) {
    axios
      .post("http://127.0.0.1:8000/api/info/", {
        user: name,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteUser(name) {
    axios
      .delete("http://127.0.0.1:8000/api/info/Batman", {})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  showUser() {
    axios
      .get("http://127.0.0.1:8000/api/info")
      .then(function (response) {
        const info = response.data;

        // console.log(info);
        return info;
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }
}

async function lalala() {
  await axios
      .get("http://127.0.0.1:8000/api/info")
      .then(function (response) {
        const info = response.data;

        return info;
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
} 

export default lalala;