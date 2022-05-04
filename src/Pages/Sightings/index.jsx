import React, { useEffect, useState } from "react";
import { Wrapper, Container } from "./style";
import { handleGetSightings } from "../../api/api";

function ListSightings({ props }) {
  return (
    <>
      <h1>Abyzou</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Asmodaeus.png/200px-Asmodaeus.png" alt="Sighting" />
      <p>lat: {props.lat}</p>
      <p>lon: {props.lon}</p>
      <p>time: {props.time}</p>
    </>
  );
}

export default function Sightings() {
  const [info, setInfo] = useState([]);

  useEffect(async () => {
    const sightings = await handleGetSightings();
    setInfo(sightings);
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
