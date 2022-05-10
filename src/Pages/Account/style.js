import styled from "styled-components";
import img from "../../assets/note4.png";

const font = "font-family: 'IBM Plex Mono', monospace;";
let myRed1 = "#9C0025";

export const Wrapper = styled.div`
  
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #484848;

  font-family: ${font};
  font-size: 1.5rem;
  color: ${myRed1};

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input,
  button {
    background: transparent;
    color: ${myRed1};
    font-weight: 500;
    font-size: 1rem;
    border: 0 none;
    border-bottom: 1px solid ${myRed1};
    box-shadow: none;
    margin: 10px;
    font-size: 1.5rem;
  }
  input {
    max-width: 80vw;
  }

  input[type="submit"] {
    color: ${myRed1};
    border: 1px solid ${myRed1};
    margin-top: 2rem;
  }

  button {
    color: #dfd7bb;
    border: 1px solid ${myRed1};
    background-color: ${myRed1};
  }

  input[type="submit"],
  button {
    min-width: 50vw;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  p {
    font-family: "Rock Salt", cursive;

    margin-bottom: 10vw;
    text-align: center;
    max-width: 90vw;
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

export const NoteMenu = styled.section`
  position: absolute;
  top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
