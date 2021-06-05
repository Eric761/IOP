import React from "react";
import { CloseIcon, SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLink} from "./SidebarElements";

const Sidebar = ({isOpen,toggle}) => {
  return (
    <>
      {/* If we click on any part of Sidebar it still closes !! */}
      <SidebarContainer isOpen={isOpen} onClick={toggle}> 
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="/" onClick={toggle}>Input</SidebarLink>
                <SidebarLink to="/" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="/" onClick={toggle}>Analytics</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
