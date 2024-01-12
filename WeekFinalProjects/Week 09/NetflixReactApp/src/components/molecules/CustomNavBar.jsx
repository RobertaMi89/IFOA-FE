import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CustomDropDown from "../atoms/CustomDropDown";

const CustomNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              Tv Shows
            </Nav.Link>
            <Nav.Link className="text-light" href="#home">
              Movies
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              Recently Added
            </Nav.Link>
            <Nav.Link className="text-light" href="#home">
              My List
            </Nav.Link>
          </Nav>
          <CustomDropDown />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
