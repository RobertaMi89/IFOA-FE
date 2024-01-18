import CustomGallery from "../molecules/CustomGallery";
import Container from "react-bootstrap/Container";

const CustomMain = () => {
  return (
    <>
      <Container fluid className="bg-dark">
        <Container fluid className="p-3">
          <h4 className="text-light">Harry Potter</h4>
          <CustomGallery url="http://www.omdbapi.com/?apikey=8eaa5d18&s=harry%20potter" />
        </Container>
        <Container fluid className="p-3">
          <h4 className="text-light">Star Wars</h4>
          <CustomGallery url="http://www.omdbapi.com/?apikey=cf9516cd&s=star%20wars" />
        </Container>
        <Container fluid className="p-3">
          <h4 className="text-light">The Lord of the Rings</h4>
          <CustomGallery url="http://www.omdbapi.com/?apikey=cf9516cd&s=the+lord+of+the+rings" />
        </Container>
      </Container>
    </>
  );
};
export default CustomMain;
