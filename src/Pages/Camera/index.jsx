import React, { useRef, useEffect, useState, useCallback } from "react";
import Back from "../../Components/BackArrow";
import vida from "./vida.png";
import {
  Wrapper,
  Button1,
  Button2,
  Bar,
  Button3,
  Bar2,
  Container,
  ListHP,
} from "./style";
import { randomNumber } from "./../../utils/leds";

function App() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, sethasPhoto] = useState(false);
  const [position, setPosition] = useState({
    x: 100,
    y: 111,
    visible: false,
    opacity: 0,
  });
  const [hp, setHp] = useState(5);
  const [vidas, setVidas] = useState();

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => getVidas(), [hp]);

  function getVidas() {
    let lifes = [];
    for (let i = 0; i < hp; i++) {
      lifes.push(i + 1);
    }
    setVidas(lifes.map(() => <img id="vida" src={vida} alt="vida" />));
  }

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
        facingMode: "environment",
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        console.log(video, videoRef);
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideo();

    const time = setInterval(() => {
      const a = randomNumber(0, 200);
      if (hp > 0) {
        // var visible = false;
        // const values = {
        //   x: randomNumber(0, 200),
        //   y: randomNumber(0, 200),
        //   opacity: randomNumber(0.5, 0.9),
        // };
        // if (values.x < 200 && values.y < 200) {
        //   visible = true;
        // }
        setHp(hp - 1);
        // setPosition(values, visible);
      console.log(a, hp);
      }
    }, 3000);

    return () => clearInterval(time);
  }, [videoRef]);

  return (
    <Container position={position}>
      <div id="listHP">
        {vidas} {hp}
      </div>
      <Back />
      <Wrapper>
        <Bar>
          <Button1 onClick={() => {console.log("awscsa")}}>
            <div />
          </Button1>
          <Button2>
            <div />
          </Button2>
          <Button3>
            <div />
          </Button3>
        </Bar>
        <div
          id="aura"
          // src="https://c.tenor.com/3uPr2xZyhr8AAAAC/aura.gif"
        />
        <video ref={videoRef}></video>
        <Bar2 />
      </Wrapper>
    </Container>
  );
}

export default App;
