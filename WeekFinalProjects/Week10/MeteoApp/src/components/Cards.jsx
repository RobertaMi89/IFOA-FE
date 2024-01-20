import CustomCard from "./CustomCard";
import { Container, Row, Col } from "react-bootstrap";
const Cards = ({ cityData }) => {
  const dataExists = Object.keys(cityData).length;
  return (
    <>
      {dataExists ? (
        <Container className="pt-3 ">
          <Col xs={6} md={6}>
            <h3 className="text-dark mb-4">{cityData.name}</h3>
          </Col>
          <Row xs={1} md={2} className="g-4">
            <Col className="d-flex justify-content-center">
              <CustomCard
                meteoProp={{
                  name: "Wind Speed",
                  value: cityData.wind.speed + " km/h",
                  icon: "./src/assets/media/icon/windicon.png",
                }}
                bgImg={"./src/assets/media/si-alza-il-vento.jpg"}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <CustomCard
                meteoProp={{
                  name: "Weather",
                  value: cityData.weather[0].description,
                  icon: `http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`,
                }}
                bgImg={"./src/assets/media/totoropioggia.jpg"}
              />
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            <Col className="d-flex justify-content-center">
              <CustomCard
                meteoProp={{
                  name: "Humidity",
                  value: cityData.main.humidity + "%",
                  icon: "./src/assets/media/icon/humidityicon.png",
                }}
                bgImg={"./src/assets/media/Ponyo.png"}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <CustomCard
                meteoProp={{
                  name: "Temperature",
                  value: Math.floor(cityData.main.temp) + "°",
                  icon: "./src/assets/media/icon/temperatureicon.png",
                }}
                bgImg={"./src/assets/media/calcifer.jpg"}
              />
            </Col>
          </Row>
        </Container>
      ) : (
        <p>No data</p>
      )}
    </>
  );
};

export default Cards;
