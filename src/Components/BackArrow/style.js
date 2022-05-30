import styled from "styled-components";
import img from "../../assets/tape.png";

let myRed1 = "#9C0025";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99999999;
    background-image: url(${img});
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-position: -10px -10px;
    background-size: 150px;
    

    position: absolute  ;
    top: 0px;
    left: 0px;
    width: 130px;
    height: 50px;
    /* background-color: blue; */

    
    color: ${myRed1};
`