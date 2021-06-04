import styled from "styled-components";
import img from "../../assets/note4.png";

const font = "font-family: 'IBM Plex Mono', monospace;";

const myRed1 = "#9C0024"
const myRed2 = "#ac0143"

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Rock+Salt&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Creepster&display=swap");

  width: 100vw;
  height: 200vh;

  overflow-y: hidden;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

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
  button {
    background: transparent;
    color: ${myRed1};
    ${font}
    font-weight: 500;
    font-size: 1rem;
    border: 0 none;
    border-bottom: 1px solid ${myRed1};
    box-shadow: none;
    margin: 10px;
    font-size: 1.5rem;
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
`;

export const Note = styled.div`
  width: 190vw;
  height: 160vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 190vw 160vw;
`;

export const NoteMenu = styled.section`
  position: absolute;
  top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
