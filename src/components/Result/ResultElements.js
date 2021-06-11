import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #dfe4e0;
`;

export const Title = styled.div`
  display: flex;
  margin-top: 6vh;
  margin-bottom: 7vh;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Left = styled.div`
  font-weight: bolder;
  color: #000000;
  font-size: 45px;
  letter-spacing: 3px;
`;

export const ContentBtnRight = styled.div`
  position: absolute;
  right: 80px;
  top: 170px;
  display: flex;
  justify-content: center;
  a {
    border: 2px solid #000000;
    padding: 16px 50px;
    height: 50px;
    font-weight: 630;
    color: #2f2f2b;
    background-color: transparent;
    transition: background-color 0.35s, color 0.35s;
    text-decoration: none;
    border-radius: 10px;
    white-space: nowrap;
    line-height: 17px;
    &:hover {
      background-color: #000000;
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

export const ContentBtnLeft = styled.div`
  position: absolute;
  left: 80px;
  top: 170px;
  display: flex;
  justify-content: center;
  a {
    border: 2px solid #2b3747;
    padding: 16px 50px;
    height: 50px;
    font-weight: 630;
    color: #2f2f2b;
    background-color: transparent;
    transition: background-color 0.35s, color 0.35s;
    text-decoration: none;
    border-radius: 10px;
    white-space: nowrap;
    line-height: 17px;
    &:hover {
      background-color: #000000;
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

export const Heading1 = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 5vh;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  color: #000000;
  font-size: 35px;
`;

export const Heading2 = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 5vh;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  color: #000000;
  font-size: 35px;
`;

export const ValueContainer = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: rgba(255 255 255);
`;

export const UnitContainer = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: rgba(255 255 255);
  text-align: center;
`;

export const StyledGrid1 = styled(Grid)`
  padding: 0 120px;
  padding-bottom: 11vh;
  justify-content: space-evenly;
  @media screen and (max-width: 1350px) {
    padding: 80px;
  }
  @media screen and (max-width: 1200px) {
    padding: 60px;
  }
  @media screen and (max-width: 1000px) {
    padding: 35px;
  }
  @media screen and (max-width: 750px) {
    padding: 20px;
  }
  @media screen and (max-width: 650px) {
    padding: 10px;
  }
  @media screen and (max-width: 630px) {
    padding: 2px;
  }
  @media screen and (max-width: 599px) {
    padding: 60px;
  }
`;

export const StyledGrid2 = styled(Grid)`
  padding: 0 300px;
  padding-bottom: 12vh;
  background-color: #dfe4e0;
`;