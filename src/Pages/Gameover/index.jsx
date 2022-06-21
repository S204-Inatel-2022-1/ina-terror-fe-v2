import Markdown from "markdown-to-jsx";
import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Container } from "./style";
import BackArrow from "../../Components/BackArrow/index";
import audio from "./jump.mp3";

export default function Article() {
  return (
    <Container>
      <BackArrow />
      <h1>The Ghost Escaped...</h1>

      <audio autoplay src={audio}/>
    </Container>
  );
}
