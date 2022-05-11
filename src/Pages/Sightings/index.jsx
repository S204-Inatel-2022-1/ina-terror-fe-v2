import React, { useEffect, useState } from "react";
import { Wrapper, Container } from "./style";
import { handleGetSightings } from "../../api/api";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  useEffect(() => {
    const sightings = handleGetSightings();
    setInfo(sightings);
  }, []);

  return (
    <Container>
      <Wrapper>
        {info.map((event) => (
          <ListSightings props={event} />
        ))}
        <button onClick={() => history.push("/menu")} className="goback">Go Back</button>
      </Wrapper>
    </Container>
  );
}
