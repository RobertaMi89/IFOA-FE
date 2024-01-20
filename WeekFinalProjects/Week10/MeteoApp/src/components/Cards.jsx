import CustomCard from "./CustomCard";
import { Container, Row, Col } from "react-bootstrap";
const Cards = ({ cityData }) => {
  const dataExists = Object.keys(cityData).length;
  return (
    <>
      {dataExists ? (
        <Container className="mt-5">
          <Col xs={6} md={6}>
            <p>City: {cityData.name}</p>
          </Col>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <CustomCard
                meteoProp={{
                  name: "Wind Speed",
                  value: cityData.wind.speed + " km/h",
                  icon: "./src/assets/media/icon/windicon.png",
                }}
                bgImg={"./src/assets/media/si-alza-il-vento.jpg"}
              />
            </Col>
            <Col>
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
            <Col>
              <CustomCard
                meteoProp={{
                  name: "Humidity",
                  value: cityData.main.humidity + "%",
                  icon: "./src/assets/media/icon/humidityicon.png",
                }}
                bgImg={"./src/assets/media/Ponyo.png"}
              />
            </Col>
            <Col>
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
