import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Jumbotron = () => {
  return (
    <>
      <Container fluid className="bg-light">
        <Row>
          <Col className="text-center">
            <h1>Welcome</h1>
            <p>Comprami sono in vendita</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Jumbotron;
