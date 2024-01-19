import "./App.css";
import Container from "react-bootstrap/Container";
import CustomFooter from "./components/CustomFooter";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavBar from "./components/molecules/CustomNavBar";

export function App() {
  return (
    <>
      <Container fluid className="app m-0">
        <CustomNavBar />
        <Cards />
        <CustomFooter />
      </Container>
    </>
  );
}

export default App;
