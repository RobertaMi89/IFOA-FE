import ButtonDetails from "./atoms/ButtonDetails";
import Card from "react-bootstrap/Card";

export const CustomCard = ({ cityData }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{cityData.name}</Card.Title>
          <Card.Text>
            Celsius: {cityData.celsius}°<br /> Weather: {cityData.weather}
            <br />
          </Card.Text>
          <ButtonDetails cityData={cityData} />
        </Card.Body>
      </Card>
    </>
  );
};
export default CustomCard;
