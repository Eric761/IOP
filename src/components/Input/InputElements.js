import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(125, 125, 125, 1);
`;

export const Tables = styled.div`
margin-top: 7vh;
`;

export const ContentBtn = styled.div`
  margin-top: 4vh;
  margin-bottom: 6vh;
  display: flex;
  justify-content: center;
  z-index: 100;
  a {
    border: 2px solid #9b9898;
    padding: 16px 50px;
    height: 50px;
    font-weight: 900;
    background-color: #e1e1e1;
    color: black;
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
