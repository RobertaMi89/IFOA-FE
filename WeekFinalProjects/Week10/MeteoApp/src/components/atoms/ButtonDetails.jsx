import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const ButtonDetails = ({ cityData }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/details", { state: { data: cityData } });
  };
  return (
    <>
      <Button variant="primary" onClick={handleButtonClick}>
        Dettagli
      </Button>
    </>
  );
};
export default ButtonDetails;
