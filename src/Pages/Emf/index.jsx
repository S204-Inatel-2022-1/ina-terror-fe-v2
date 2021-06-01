import React from "react";

import {
  Wrapper,
  LedGreen,
  LedYellow,
  LedSalmon,
  LedRed,
  LedGreenYelow,
  Button,
  Leds,
  DecorationRight,
  DecorationLeft
} from "./style";

export default function Emf() {
  return (
    <Wrapper>
      <Leds>
        <LedGreen className="led"/>
        <LedGreenYelow className="led"/>
        <LedYellow className="led"/>
        <LedSalmon className="led"/>
        <LedRed className="led"/>
      </Leds>

      <Button>PRESS</Button>

      <DecorationRight />
      <DecorationLeft />
    </Wrapper>
  );
}
