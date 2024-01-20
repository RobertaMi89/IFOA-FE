import Card from "react-bootstrap/Card";

export const CustomCard = ({ meteoProp }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{meteoProp.name}</Card.Title>
          <Card.Text>
            <img src={meteoProp.icon}></img>
            {meteoProp.value}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default CustomCard;
