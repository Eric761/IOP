import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #131313;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  box-shadow: rgb(38 38 41 / 71%) 0px 5px 18px;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 74px;
  width: 100%;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  span{
      margin-left: 15px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: --22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 74px;
`;

export const NavLinks = styled(Link)`
color: ${({disable}) => (disable ? "#8c8181" : "#fff")};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-weight: 500;

&:active{
    border-bottom: 3px solid #fff;
}
`;

export const NavLinkInput = styled.div`
color: ${({disable}) => (disable ? "#8c8181" : "#fff")};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-weight: 500;

&:active{
    border-bottom: 3px solid #fff;
}
`;

// DropDown

export const Dropdown = styled.div`
  height: ${(props) => props.height};
  position: absolute;
  top: 75px;
  width: 220px;
  transform: translateX(-36%);
  background-color: #252222;
  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  transition: height 500ms ease;
`;

export const Menu = styled.div`
  width: 100%;
  h2{
    color: #000000;
  }
`;
export const MenuLink = styled(Link)`
  text-decoration: none;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 500ms;
  padding: 0.5rem;
  cursor: pointer;
  .icon-color{
    color: black;
  }
  .icon-left {
    margin-right: 0.5rem;
    &:hover {
      filter: none;
    }
  }
  .icon-right {
    margin-left: auto;
    margin-right: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: #4f4f4f;
    text-decoration: none;
    h1,h2,.icon-color{color: white;}
  }
  .icon-menu-text {
    font-size: large;
    padding-top: 2px;
    margin-left: 5px;
    color: #7b7b7b;
  }
  .icon-color{
    color: #7b7b7b;
  }
`;