import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import fantasy from "../assets/books/fantasy.json";
import history from "../assets/books/history.json";
import horror from "../assets/books/horror.json";
import romance from "../assets/books/romance.json";
import scifi from "../assets/books/scifi.json";

const Buttons = ({ setCategory }) => {
  return (
    <>
      <Container className="text-center">
        <Button
          variant="primary"
          className="m-2"
          onClick={() => setCategory(fantasy)}
        >
          Fantasy
        </Button>
        <Button
          variant="secondary"
          className="m-2"
          onClick={() => setCategory(history)}
        >
          History
        </Button>
        <Button
          variant="danger"
          className="m-2"
          onClick={() => setCategory(horror)}
        >
          Horror
        </Button>
        <Button
          variant="success"
          className="m-2"
          onClick={() => setCategory(romance)}
        >
          Romance
        </Button>
        <Button
          variant="warning"
          className="m-2"
          onClick={() => setCategory(scifi)}
        >
          Scifi
        </Button>
      </Container>
    </>
  );
};
export default Buttons;
