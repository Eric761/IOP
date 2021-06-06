import React from "react";
import ParticlesBg from "particles-bg";
import {
    Container,
    InfoRow,
    InfoCol,
    Content,
    Title,
    Heading,
    Description,
    ContentBtn,
    ImageWrapper,
    Img } from "./Home.elements";
import Header from "../Header";
// import bg1 from "../../images/power-distribution-system-3.jpg";
import bg1 from "../../images/bg4.png";
// import bg1 from "../../images/bg1.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        {/* <ParticlesBg color="#000000" num={175} type="cobweb" bg={true} />  */}
        <InfoRow>
          <InfoCol>
            <Content>
              <Title>Distribution System !</Title>
              <Heading>Customer failure statistics reinforce the need of evaluating reliability indices</Heading>
              <Description>
              The electric utility industry has developed several measures of reliability to measure system performance. In order to facilitate the quantitative analysis of the reliability of large distribution systems, user needs to calculate the various indices of reliability !
              </Description>
              <ContentBtn>
                <Link to="/custom-input">Get Started</Link>
              </ContentBtn>
            </Content>
          </InfoCol>
          <InfoCol>
            <ImageWrapper>
              <Img
                id="hero-lazy-svg"
                src={bg1}
                width="901"
                height="522"
                alt="Background-Image"
              />
            </ImageWrapper>
          </InfoCol>
        </InfoRow>
      </Container>
    </>
  );
};

export default Home;
