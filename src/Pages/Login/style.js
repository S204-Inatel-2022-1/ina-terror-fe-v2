import styled from "styled-components";
import img from "../../assets/note2.png";

const fonte = "font-family: 'IBM Plex Mono', monospace;"

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap');


  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #484848;

  ${fonte}
  font-size: 1.5rem;
  color: #ac0143;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    background: transparent;
    color: #ac0143;
    ${fonte}
    font-weight: 500;
    font-size: 1rem;
    border: 0 none;
    border-bottom: 1px solid #ac0143 ;
    box-shadow: none;
    margin: 10px;
    font-size: 1.5rem;
   
  }

  input[type=submit] {
    color: #ac0143;
    border: 1px solid #ac0143;
    border-radius: 10%;
  }

  label{
    display: flex;
    flex-direction: column;
    /* align-items : center; */
  }


`;

export const Note = styled.div`
  width: 140vw;
  height: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 140vw 100vw;
`;
