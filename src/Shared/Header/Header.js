import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="lg"
      bg="black"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="fw-bold" as={CustomLink} to={"/home"}>
          <span className="brand-name">Travel Baba</span>
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-warning"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Nav.Link as={CustomLink} to={"home#services"}>
              Services
            </Nav.Link>

            <Nav.Link as={CustomLink} to={"/about"}>
              About
            </Nav.Link>
            <Nav.Link as={CustomLink} to={"/blog"}>
              Blog
            </Nav.Link>
            {user ? (
              <button
                className="btn btn-warning h-50 my-auto fw-bold"
                onClick={handleSignOut}
              >
                Sign-Out
              </button>
            ) : (
              <Nav.Link as={CustomLink} to={"/login"}>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
