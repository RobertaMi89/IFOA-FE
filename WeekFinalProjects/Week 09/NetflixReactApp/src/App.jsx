import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import TvShows from "./components/pages/TvShows";
import CustomMovies from "./components/pages/Movies";
import RecentlyAdded from "./components/pages/RecentlyAdded";
import CustomMyList from "./components/pages/MyList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home page="Homepage" />} />
          <Route path="/tv-shows" element={<TvShows page="TvShows" />} />
          <Route path="movies" element={<CustomMovies page="Movies" />} />
          <Route
            path="/recently-added"
            element={<RecentlyAdded page="RecentlyAdded" />}
          />
          <Route path="/my-list" element={<CustomMyList page="MyList" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
