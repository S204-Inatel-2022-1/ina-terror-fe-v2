import React, { useEffect, useState } from "react";
import { Wrapper, Container } from "./style";
import { handleGetSightings } from "../../api/api";
import Back from "../BackArrow/index";
import axios from "axios";

// const api = axios.create({
//   baseURL: "https://inaterror-api.herokuapp.com/api/",

// });
export default function Sightings({id, invert, rarity}) {
  const [data, setData] = useState('');

  useEffect(() => {
    handle();
  }, []);


  async function handle() {
    const query = `https://inaterror-api.herokuapp.com/api/info/${id}/${invert}/${rarity}/image`
    console.log(query);
    const data = await axios
      .get(query)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return [];
      });
    setData(data);
    return data;
  }

  const Example = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} />;

  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
      <Example data={data} />
    </>
  );
}
