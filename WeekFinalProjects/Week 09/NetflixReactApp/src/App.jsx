import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomHeader from "./components/organisms/CustomHeader";
import CustomMain from "./components/organisms/CustomMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomHeader />
      <CustomMain />
    </>
  );
}

export default App;
