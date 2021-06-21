import React from "react";
import { Navbar, Container, Nav, Image, FormLabel } from "react-bootstrap";
import logo from "../../../assets/img/logo.png";
import { zViewMap } from "../../../config";
import logoutIcon from "../../../assets/img/logoutIcon.png";
import "./styles.scss";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();
  const renderViews = () => {
    return zViewMap.map((element) => {
      return (
        <Nav.Link href={`${element.link}`} className="text-center">
          <Image
            src={element.icon}
            className="d-inline-block align-top navigationIcon"
          />
          <span>{element.label}</span>
        </Nav.Link>
      );
    });
  };

  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        bg="light"
        sticky-top
        className="navigationNavbar"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="14%"
              height="14%"
              className="d-inline-block align-top"
              alt="Zarph"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {renderViews()}
              <Nav.Link onClick={logout} className="text-center">
                <Image
                  src={logoutIcon}
                  className="d-inline-block align-top navigationIcon"
                />
                <span>Logout</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
