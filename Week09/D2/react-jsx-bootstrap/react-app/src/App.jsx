import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home page="/home" />} />
          <Route path="/About" element={<About page="/about" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
