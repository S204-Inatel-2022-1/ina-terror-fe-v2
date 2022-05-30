import React, { useEffect, useState } from "react";
import { Wrapper, Container } from "./style";
import { handleGetSightings } from "../../api/api";
import Back from './../../Components/BackArrow/index';
import ImageGhost from './../../Components/ImageGhost';

function ListSightings({ props }) {
  return (
    <>
      <h1>Abyzou</h1>
      <ImageGhost />
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
      <Back />
      <br></br>
      <br></br>
      <br></br>
      <Wrapper>
        {info.map((event) => (
          <ListSightings props={event} />
        ))}
      </Wrapper>
    </Container>
  );
}
