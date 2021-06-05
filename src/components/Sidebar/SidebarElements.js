import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #131313;
display: grid;
align-items: center;
top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? "100%" : "0%")};
`;

export const CloseIcon = styled(FaTimes)`
color: #fff;
`; 

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color: #fff;
`;

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4,80px);
text-align: center;

@media screen and (max-width: 768px){
    grid-template-rows: repeat(4,70px);
}
`;

export const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;

&:hover{
    color: #01bf71;
    transition: 0.2s ease-in-out;
}
`;

