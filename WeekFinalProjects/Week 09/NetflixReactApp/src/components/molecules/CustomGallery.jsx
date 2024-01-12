import { useState, useEffect } from "react";

const CustomGallery = ({ url }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.Search);
      });
  }, []);

  return (
    <div className="mx-5">
      {movies.map((movie) => (
        <img
          key={movie.imbID}
          src={movie.Poster}
          alt={movie.Title}
          width={150}
          className="m-1"
        />
      ))}
    </div>
  );
};
export default CustomGallery;
