import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomCard from "../CustomCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import fetchData from "../../utils/FetchData";

export const CustomNavBar = () => {
  const [city, setCity] = useState({});
  const [location, setLocation] = useState("");

  const urlData = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4bb0ca7fe3d82827c0b62fca86878ab2&units=metric`;

  const searchLocation = async () => {
    let data = await fetchData(urlData);

    setCity({
      name: data.name,
      celsius: data.main.temp,
      weather: data.weather[0].description,
      wind: data.wind.speed,
    });
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="d-flex ">
          <Navbar.Brand>
            <CustomCard cityData={city} />
          </Navbar.Brand>
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
              onClick={async () => await searchLocation()}
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};
export default CustomNavBar;
