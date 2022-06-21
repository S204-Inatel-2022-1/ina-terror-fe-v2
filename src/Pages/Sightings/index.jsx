import React, { useEffect, useState } from "react";
import { Wrapper, Container } from "./style";
import { handleGetOrb, handleGetSightings } from "../../api/api";
import Back from './../../Components/BackArrow/index';
import ImageGhost from './../../Components/ImageGhost';

function ListOrb({ props }) {
  console.log('props', props.id, props.invert, props.raridade);
  return (
    <>
    <br></br>
      <ImageGhost id={props.id} invert={props.invert} rarity={props.raridade}/>
      <p>Nome: {props.nome}</p>
      <p>Localização: {props.localização}</p>
      <p>Raridade: {props.raridade}</p>
      <p>Tipo: {props.tipo}</p>
      <p>_______________________________</p>


    </>
  );
}

export default function Sightings() {
  const [info, setInfo] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const orb = await handleGetOrb();
    setInfo(orb.reverse());
    console.log(orb);
  }, []);

  return (
    <Container>
      <Back />
      <br></br>
      <br></br>
      <br></br>
      <Wrapper>
        {info.map((event) => (
          <ListOrb props={event} />
        ))}
      </Wrapper>
    </Container>
  );
}
