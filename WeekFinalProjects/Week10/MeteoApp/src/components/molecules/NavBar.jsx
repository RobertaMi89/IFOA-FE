import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Search from "../atoms/Search";

const NavBar = () => {
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>January 2024</Navbar.Brand>
            <p>data di oggi</p>
          </Container>
          <Search />
        </Navbar>
      </Container>
    </>
  );
};
export default NavBar;
