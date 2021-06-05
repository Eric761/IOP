import React from 'react';
import { SiPowerbi } from "react-icons/si";
import {FaBars} from "react-icons/fa";
import { Nav,NavContainer,NavLogo,MobileIcon,NavItems,NavLinks,NavMenu } from "./NavbarElements";

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                <SiPowerbi />
                <span>IOP</span>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                <NavItems>
                    <NavLinks to="/">Home</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="/">Input</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="/">About</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="/">Analytics</NavLinks>
                </NavItems>
                </NavMenu>
            </NavContainer>
        </Nav>
        </>
    )
}

export default Navbar
