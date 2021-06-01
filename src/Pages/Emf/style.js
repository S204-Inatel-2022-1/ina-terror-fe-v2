import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #484848;

  .led {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 40px 10px;
  }
`;

export const Leds = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: Center;
`;

export const LedGreen = styled.div`
  background-color: ${(props) => (props.ledOn ? "#B8FE7F" : "#517137")};
`;
export const LedGreenYelow = styled.div`
  background-color: ${(props) => (props.ledOn ? "#C6FF97" : "#65814f")};
`;
export const LedYellow = styled.div`
  background-color: ${(props) => (props.ledOn ? "#FDFE70" : "#6d6d31")};
`;
export const LedSalmon = styled.div`
  background-color: ${(props) => (props.ledOn ? "#FE756E" : "#81423f")};
`;
export const LedRed = styled.div`
  background-color: ${(props) => (props.ledOn ? "#FB4C30" : "#730909")};
`;

export const Button = styled.button`
  width: 150px;
  height: 150px;

  border: none;
  border-radius: 100%;

  font-size: 30px;

  margin-top: 150px;

  background-color: #5f5f5f;

  color: white;
  background: linear-gradient(0deg, #5f5f5f, #5f5f5f), #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:active {
    box-shadow: none;
    background-color: #484848;
  }
`;

export const DecorationLeft = styled.div`
  width: 20vw;
  height: 50vh;

  position: absolute;
  left: 0;
  bottom: 0;

  background: linear-gradient(to left bottom, #484848 50%, #5f5f5f 50%);
`;

export const DecorationRight = styled.div`
  width: 20vw;
  height: 50vh;

  position: absolute;
  right: 0;
  bottom: 0;

  background: linear-gradient(to right bottom, #484848 50%, #5f5f5f 50%);
`;
