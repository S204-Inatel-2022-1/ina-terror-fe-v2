import React from "react";
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

function ListSightings({props}) {
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
  return (
    <Container>
      <Wrapper>
        {mock.map((event) => <ListSightings props={event} />)}
      </Wrapper>
    </Container>
  );
}
