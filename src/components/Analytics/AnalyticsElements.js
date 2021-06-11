import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const Container = styled.div`
padding: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #d3d4da;
`;

export const Row = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: ${({margin}) => (margin ? "2vh" : "0")};
margin-bottom: 9vh;
`;

export const StyledPaper = styled(Paper)`
height: 80vh;
width: 70vw;
display: flex;
align-items: center;
justify-content: center;
padding: 12px;
`;

export const ContentBtn = styled.div`
  margin-top: 4vh;
  margin-bottom: 6vh;
  display: flex;
  justify-content: center;
  z-index: 100;
  a {
    border: 2px solid #00fdff;
    padding: 16px 50px;
    height: 50px;
    font-weight: 900;
    background-color: #1f1f1f;
    color: #00fdff;
    transition: background-color 0.35s, color 0.35s;
    text-decoration: none;
    border-radius: 30px;
    white-space: nowrap;
    line-height: 17px;
    letter-spacing: 1px;
    &:hover {
      background-color: #000000;
      color: white;
      border-color: #000000;
      text-decoration: none;
    }
    @media screen and (max-width: 960px) {
      padding: 15px 55px;
    }
    @media screen and (max-width: 720px) {
      padding: 15px 55px;
    }
  }
`;