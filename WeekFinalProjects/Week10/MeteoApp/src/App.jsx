import { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import CustomFooter from "./components/CustomFooter";
import Cards from "./components/Cards";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function App() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState(null);

  const urlData = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bb0ca7fe3d82827c0b62fca86878ab2&units=metric`;

  const searchLocation = async () => {
    try {
      const response = await fetch(urlData);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const weatherData = await response.json();
      setLocation(data);

      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <Container fluid className="app m-0">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid className="d-flex ">
            <Navbar.Brand>Inserire la city trovata</Navbar.Brand>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
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
                onClick={() => searchLocation()}
              >
                Search
              </Button>
            </Form>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{location?.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Container>
        </Navbar>
        <Container>
          <p>Palermo</p>
        </Container>
        <Container>
          <h1>15 °</h1>
        </Container>
        <Cards />
        <CustomFooter />
      </Container>
    </>
  );
}

export default App;
