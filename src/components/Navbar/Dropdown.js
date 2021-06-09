import React, { useState, useEffect, useRef } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { Menu, Dropdown, MenuLink } from "./NavbarElements";

const DropdownMenu = ({handleDropdown}) => {
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function DropdownItem(props) {
    return (
      <MenuLink to={props.url} onClick={handleDropdown}>
        <span className="icon-left">{props.leftIcon}</span>
        <h1 className="icon-menu-text">{props.children}</h1>
        <span className="icon-right">{props.rightIcon}</span>
      </MenuLink>
    );
  }

  return (
    <Dropdown height={menuHeight} ref={dropdownRef}>
        <Menu>
            <DropdownItem
                rightIcon={<FaChevronCircleRight className="icon-color"/>}
                url="/custom-input"
            >
            Custom Input
            </DropdownItem>
            <DropdownItem
                rightIcon={<FaChevronCircleRight className="icon-color"/>}
                url="/manual-input"
            >
            Manual Input
            </DropdownItem>
        </Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
