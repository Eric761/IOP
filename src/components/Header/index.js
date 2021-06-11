import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Header = ({enableAnalytics}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} enableAnalytics={enableAnalytics}/>
      <Navbar toggle={toggle} enableAnalytics={enableAnalytics} />
    </>
  );
};

export default Header;
