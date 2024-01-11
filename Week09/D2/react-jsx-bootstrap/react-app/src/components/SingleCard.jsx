import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const SingleCard = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const CardSelected = {
    border: "2px dotted green",
    width: "18rem",
    borderRadius: "10px",
  };
  return (
    <>
      <Card
        key={book.asin}
        style={{ width: "18rem", border: selected && "2px dotted green" }}
        className="my-2"
      >
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => setSelected(!selected)}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.asin + "-" + book.price}</Card.Text>
          <Button variant="primary">Compra</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default SingleCard;
