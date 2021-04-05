import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand href="/home">My Footer</Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default Footer;
