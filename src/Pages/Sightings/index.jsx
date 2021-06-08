import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Wrapper, Container } from "./style";

const mock = [
  { id: 1, lat: "-64.7418", lon: "46.0406", time: "12:00" },
  { id: 2, lat: "-64.7418", lon: "46.0406", time: "12:00" },
  { id: 3, lat: "-64.7418", lon: "46.0406", time: "12:00" },
  { id: 4, lat: "-64.7418", lon: "46.0406", time: "12:00" },
  { id: 5, lat: "-64.7418", lon: "46.0406", time: "12:00" },
  { id: 6, lat: "-64.7418", lon: "46.0406", time: "12:00" },
  { id: 7, lat: "-64.7418", lon: "46.0406", time: "12:00" },
];

function ListSightings({ props }) {
  return (
    <>
      <h1>Sighting {props.id}</h1>
      <p>lat: {props.lat}</p>
      <p>lon: {props.lon}</p>
      <p>time: {props.time}</p>
    </>
  );
}



export default function Sightings() {
  const [info, setInfo] = useState([]);


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/ginfo`)
      .then(function (response) {
        setInfo(response.data)
        console.log(info);
        
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      })
  }, []);

  return (
    <Container>
      <Wrapper>
        {info.map((event) => (
          <ListSightings props={event} />
        ))}
      </Wrapper>
    </Container>
  );
}
