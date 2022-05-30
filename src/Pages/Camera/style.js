import styled from "styled-components";
import img from "../../assets/note4.png";

const font = "font-family: 'IBM Plex Mono', monospace;";
const myRed1 = "#9C0024"

export const Button1 = styled.button`
  background-color: #393A32;
  width: 100px;
  height:100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 10px;
  right: 10px;

  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #9C0024;
  }
`;
export const Button2 = styled.button`
  background-color: #393A32;
  width: 100px;
  height:100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* top: 10px; */
  right: 10px;

  div {
    width: 20px;
    height: 20px;
    background: #006B79;
  }
`;
export const Button3 = styled.button`
  background-color: #393A32;
  width: 100px;
  height:100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* top: 10px; */
  right: 10px;

  div {

    width: 0; 
    height: 0; 
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid #2E2E2E;

  }
`;

export const Bar = styled.div`
  position: absolute;
  background-color: #484848;
  width: 150px;
  height:100vh;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const Bar2 = styled.div`
  position: absolute;
  background-color: #484848;
  width: 50px;
  height:100vh;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 200vh;
  position: relative;


  display: flex;
  flex-direction: column;
  align-items: cen100r;
  /* justify-content: 100vw; */

  background-color: #484848;

  ${font}
  font-size: 1.5rem;
  color: ${myRed1};

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input,

  input {
    width: 70vw;
    max-width: 300px;
  }

  input[type="submit"] {
    color: ${myRed1};
    border: 1px solid ${myRed1};
    margin-top: 2rem;
  }



  input[type="submit"],

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  img {
    margin-top: 5vh;
    max-width: 90vw;
  }

  p {
    font-family: "Rock Salt", cursive;

    margin-bottom: 10vw;
    text-align: center;
    max-width: 90vw;
  }

  video{
    /* width: 100vw; */
    height: 100vh;

  }
`;


