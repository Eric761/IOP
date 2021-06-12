import styled from "styled-components";
import { Paper } from "@material-ui/core";
import { MdVerticalAlignTop } from "react-icons/md";

export const Container = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d3d4da;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12vh;
`;

export const Title = styled.div`
  margin: 5vh auto;
  margin-top: 6vh;
  text-align: center;
  font-weight: bolder;
  color: #000000;
  font-size: 45px;
  letter-spacing: 3px;
`;

export const StyledPaper = styled(Paper)`
  height: 70vh;
  width: ${({left}) => (left ? "50vw" : "37vw")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  cursor: pointer;
`;


export const ContentBtn = styled.div`
  margin-top: 4vh;
  margin-bottom: -3vh;
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

export const StyledMdVerticalAlignTop = styled(MdVerticalAlignTop)`
  height: 13vh;
  width: 6vw;
  position: relative;
  right: -40em;
  bottom: 4em;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 50px;
  &:hover{
    background-color: black;
    color: white;
  }
`;