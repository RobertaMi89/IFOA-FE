import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Search = () => {
  <Form inline>
    <Row>
      <Col xs="auto">
        <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
      </Col>
      <Col xs="auto">
        <Button type="submit">Submit</Button>
      </Col>
    </Row>
  </Form>;
};
export default Search;
