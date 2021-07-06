import styled from "styled-components";

export const Container = styled.div`
  /* // Remove height -> (Don't know why white color randomly appears at bottom) */
  padding-top: 70px;
  background-color: #d3d4da;
  @media screen and (max-width: 1005px) {
    padding-top: 60px;
  }
  @media screen and (max-width: 600px) {
    padding-top: 50px;
  }
  @media screen and (max-width: 550px) {
    padding-top: 30px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-items: center;
`;

export const InfoCol = styled.div`
  margin-bottom: 15px;
  padding-left: ${({ flag }) => (flag ? "55px" : "32px")};
  padding-right: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 1230px) {
    padding-left: ${({ flag }) => (flag ? "25px" : "15px")};
  }
  @media screen and (max-width: 1140px) {
    padding-left: ${({ flag }) => (flag ? "20px" : "12px")};
  }
  @media screen and (max-width: 1105px) {
    padding-left: ${({ flag }) => (flag ? "15px" : "10px")};
  }
  @media screen and (max-width: 1006px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Content = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 2px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 1210px) {
    padding-left: 20px;
  }
  @media screen and (max-width: 960px) {
    padding-bottom: 15px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 620px;
  display: flex;
  justify-content: flex-start;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  width: 570px;
  height: 570px;
  @media screen and (max-width: 1300px) {
    width: 550px;
    height: 550px;
  }
  @media screen and (max-width: 1230px) {
    width: 540px;
    height: 540px;
  }
  @media screen and (max-width: 1140px) {
    width: 530px;
    height: 530px;
  }
  @media screen and (max-width: 600px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 550px) {
    width: 450px;
    height: 450px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 35px;
  font-size: 55px;
  line-height: 1.1;
  font-weight: 700;
  color: #000000;
  text-align: center;
`;

export const Heading = styled.h2`
  /* max-width: 460px; */
  margin-bottom: 16px;
  font-size: 25px;
  line-height: 1;
  font-weight: 600;
  color: #0a0707;
  text-align: center;
`;

export const Description = styled.p`
  /* max-width: 450px; */
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 22px;
  color: #000000;
  text-align: center;
  @media screen and (max-width: 960px) {
    padding-left: 5px;
    max-width: 460px;
  }
  @media screen and (max-width: 530px) {
    max-width: 450px;
  }
`;

export const ContentBtn = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  a {
    border: 2px solid #121212;
    padding: 16px 50px;
    height: 50px;
    font-weight: 630;
    color: #2f2f2b;
    background-color: transparent;
    transition: background-color 0.35s, color 0.35s;
    text-decoration: none;
    border-radius: 30px;
    white-space: nowrap;
    line-height: 17px;
    &:hover {
      background-color: #121212;
      color: white;
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
