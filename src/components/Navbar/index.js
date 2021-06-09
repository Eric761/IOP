import React, { useState } from "react";
import { SiPowerbi } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  NavLinks,
  NavMenu,
} from "./NavbarElements";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import DropdownMenu from "./Dropdown";

const DarkTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#131313",
      color: "fff",
      boxShadow: theme.shadows[1],
      fontSize: 12,
      fontFamily: "'Nunito', sans-serif",
      fontWeight: "400",
      padding: "8px"
    }
}))(Tooltip);

const Navbar = ({ toggle }) => {
  const [show, setShow] = useState(true);
  const [open,setOpen] = useState(false);
  const handleDropdown = () => {
      setOpen(!open);
  };

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
              <NavLinks onClick={handleDropdown}>Input</NavLinks>
              {open && <DropdownMenu />}
            </NavItems>
            <NavItems>
              <NavLinks to="/">About</NavLinks>
            </NavItems>
            <NavItems>
              {show ? (
                <DarkTooltip title="Please fill the input values!" arrow>
                  <NavLinks to="/" disable={true}>
                    Analytics
                  </NavLinks>
                </DarkTooltip>
              ) : (
                <NavLinks to="/">Analytics</NavLinks>
              )}
            </NavItems>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
