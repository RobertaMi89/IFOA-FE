import CustomCard from "./CustomCard";
import CustomFooter from "./CustomFooter";

const Cards = ({ cityData, cityForecast }) => {
  const dataExists =
    Object.keys(cityData).length > 0 && Object.keys(cityForecast).length > 0;
  return (
    <>
      {dataExists ? (
        <div>
          <p>City: {cityData.name}</p>
          <CustomCard
            meteoProp={{
              name: "Wind Speed",
              value: cityData.wind.speed + " km/h",
              icon: "",
            }}
          />
          <CustomCard
            meteoProp={{
              name: "Weather",
              value: cityData.weather[0].description,
              icon: `http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`,
            }}
          />
          <CustomCard
            meteoProp={{
              name: "Humidity",
              value: cityData.main.humidity + "%",
              icon: "",
            }}
          />
          <CustomCard
            meteoProp={{
              name: "Temperature",
              value: Math.floor(cityData.main.temp) + "°",
              icon: "",
            }}
          />
        </div>
      ) : (
        <p>No data</p>
      )}
      <CustomFooter cityForecast={cityForecast} />
    </>
  );
};

export default Cards;
