import { useState } from "react";
import "./App.css";
import CustomHeader from "./components/organisms/CustomHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomHeader />
    </>
  );
}

export default App;
