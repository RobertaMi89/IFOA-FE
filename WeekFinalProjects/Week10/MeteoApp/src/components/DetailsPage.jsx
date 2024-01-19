import { useLocation } from "react-router-dom";
import fetchData from "../utils/FetchData";

const DetailsPage = async () => {
  const location = useLocation();
  const { state } = location;

  const dataObject = state && state.data && Object.keys(state.data).length > 0;

  let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${state.data.name}&appid=4bb0ca7fe3d82827c0b62fca86878ab2&units=metric`;

  let cityForecast = await fetchData(urlForecast);
  console.log("state", state.data);
  console.log(cityForecast);
  return (
    <div>
      {dataObject ? (
        <>
          <p>Nome: {cityForecast.city.name}</p>
          {/* Altri dati... */}
        </>
      ) : (
        <p>Nessun dato disponibile.</p>
      )}
    </div>
  );
};

export default DetailsPage;
