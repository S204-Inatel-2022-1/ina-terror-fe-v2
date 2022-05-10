import styled from "styled-components";
import img from "../../assets/note4.png";

let myRed1 = "#9C0025";

export const Wrapper = styled.div`
  
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #484848;

  button {
    background: transparent;
    color: ${myRed1};
    font-family: "Rock Salt", cursive;
    font-size: 1.3rem;
    border: none;
    border-bottom: 3px solid ${myRed1};
    border-top: 3px solid ${myRed1};
    box-shadow: none;
    border-radius: 2px;
    margin: 10px;
    min-width: 300px;
  }

  .hunt {
    border: none;
    background-color: #9C0025;
    color: #dfd7bb;
    min-width: 300px;
  }
`;

export const Note = styled.div`
  width: 190vw;
  height: 180vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-image: url(${img});
  background-repeat: repeat;
  background-size: 190vw 180vw;
`;
