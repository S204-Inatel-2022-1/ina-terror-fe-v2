import React, { useState, useEffect } from "react";
import calcLeds from "../../utils/leds";
import axios from "axios";
import {
  Wrapper,
  LedGreen,
  LedYellow,
  LedSalmon,
  LedRed,
  LedGreenYellow,
  Button,
  Leds,
  DecorationRight,
  DecorationLeft,
  Alert,
} from "./style";

export default function Emf() {
  const [leds, setLeds] = useState([false, false, false, false, false]);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (play) {
        setLeds(calcLeds);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [play]);

  const runEmf = () => {
    setLeds([false, false, false, false, false]);
    setPlay(!play);
  };

  useEffect(() => {
    //date
    var date = new Date();
    var now = `${date.getHours()}:${date.getMinutes()}`;

    //lat, lon
    let lat = "";
    let lon = "";

    if (leds[4] || leds[3] || leds[2]) {
      alert("enviando");
      navigator.geolocation.getCurrentPosition((pos) => {
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;

        axios
          .post("http://localhost:8000/api/ginfo/", {
            lat: lat,
            lon: lon,
            time: now,
          })
          .then(function (response) {
            console.log(response);
            alert(response);
          })
          .catch(function (error) {
            console.log(error);
            alert(error);
          });
      });
    }
  }, [leds]);

  return (
    <Wrapper>
      <Leds>
        <LedGreen className="led" ledOn={leds[0]} />
        <LedGreenYellow className="led" ledOn={leds[1]} />
        <LedYellow className="led" ledOn={leds[2]} />
        <LedSalmon className="led" ledOn={leds[3]} />
        <LedRed className="led" ledOn={leds[4]} />
      </Leds>
      <Alert fiveAlert={leds[4]}>RUN</Alert>

      <Button play={play} onClick={() => runEmf()}>
        PRESS
      </Button>

      <DecorationRight />
      <DecorationLeft />
    </Wrapper>
  );
}
