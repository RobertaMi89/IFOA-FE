import Card from "react-bootstrap/Card";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const CustomFooter = ({ cityForecast }) => {
  console.log(cityForecast);

  const buildForecastData = (list) => {
    const oggi = new Date();
    oggi.setHours(
      oggi.getHours(),
      oggi.getMinutes(),
      oggi.getSeconds(),
      oggi.getMilliseconds()
    );

    const prossimi5Giorni = 5 * 24 * 60 * 60 * 1000; // 5 giorni in millisecondi

    const prossimi5GiorniFiltrati = list
      .filter((dato) => {
        const dataOggetto = new Date(dato.dt_txt);
        const differenzaDate = dataOggetto.getTime() - oggi.getTime();
        return differenzaDate >= 0 && differenzaDate < prossimi5Giorni;
      })
      .reduce((acc, dato) => {
        const dataOggetto = new Date(dato.dt_txt);
        const oraCorrente = oggi.getHours() * 60 + oggi.getMinutes();
        const oraOggetto =
          dataOggetto.getHours() * 60 + dataOggetto.getMinutes();

        if (!acc[dataOggetto.getDate()]) {
          acc[dataOggetto.getDate()] = dato;
        } else {
          const dataAcc = new Date(acc[dataOggetto.getDate()].dt_txt);
          const oraAcc = dataAcc.getHours() * 60 + dataAcc.getMinutes();
          const differenzaAcc = Math.abs(oraAcc - oraCorrente);
          const differenzaNuovo = Math.abs(oraOggetto - oraCorrente);

          if (differenzaNuovo < differenzaAcc) {
            acc[dataOggetto.getDate()] = dato;
          }
        }

        return acc;
      }, {});

    const risultato = Object.values(prossimi5GiorniFiltrati);
    console.log(risultato);
    return risultato.map((el) => {
      return {
        date: `${new Date(el.dt_txt).getDate()}/${
          new Date(el.dt_txt).getMonth() + 1
        }`.replace(/\b\d\b/g, "0$&"),
        temperature: el.main.temp,
      };
    });
  };
  const dataForecast = buildForecastData(cityForecast.list);

  const renderLineChart = (
    <LineChart width={1300} height={400} data={dataForecast}>
      <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" wi />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  return (
    <>
      <Card>
        <Card.Body>
          <p>Ciao</p>
          {renderLineChart}
        </Card.Body>
      </Card>
    </>
  );
};
export default CustomFooter;
