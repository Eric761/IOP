import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgba(177,169,138,1);
`; 

export const ContentBtn = styled.div`
/* max-width: 460px; */
margin-top: 4vh;
display: flex;
justify-content: center;
/* padding-right: 42px; */
a {
  border: 2px solid #2b3747;
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
    background-color: #2b3747;
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