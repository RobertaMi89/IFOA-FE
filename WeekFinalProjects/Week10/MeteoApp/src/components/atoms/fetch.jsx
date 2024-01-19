import { useState, useEffect } from "react";

const Meteo = () => {
  const [tempo, setTempo] = useState([]);
  const getTempo = async () => {
    try {
      const res = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=Palermo&limit=2&appid=0b11e5502dd818d7a1d24f57f3232a4b"
      );
      if (res.ok) {
        let data = await res.json();
        setTempo(data.Search);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getTempo();
  }, []);
};
export default Meteo;
