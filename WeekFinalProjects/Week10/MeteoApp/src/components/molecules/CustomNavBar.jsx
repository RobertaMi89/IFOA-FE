import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const CustomNavBar = () => {
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/details", { state: { location } });
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="d-flex ">
          <Navbar.Brand></Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Container className="trasparent">
            <Form className="d-flex">
              <Form.Control
                type="search"
                value={location}
                placeholder="Enter Location"
                className="me-2"
                onChange={(event) => setLocation(event.target.value)}
                aria-label="Search"
              />
              <Button
                variant="outline-success"
                onClick={() => handleButtonClick()}
              >
                Search
              </Button>
            </Form>
          </Container>
        </Container>
      </Navbar>
    </>
  );
};
export default CustomNavBar;
