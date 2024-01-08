import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation/Nav";

const seperator = " | ";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=The+Nightmare+Before+Christmas&api_key=4a27561cb4efc07bd11f3574a64dbf50"
        );

        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status}`);
        }
        const data = await res.json();

        if (data.results && data.results.length > 0) {
          const movie = data.results[0];
          setMovies([
            {
              backdropPath: movie.backdrop_path,
              genreId: movie.genre_ids,
              title: movie.title,
              popularity: movie.popularity,
              date: movie.release_date,
            },
          ]);
        }
      } catch (error) {
        console.log(
          "Une erreur est survenue lors des chargements des données",
          error
        );
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <div className="p-3 bg-[url('https://image.tmdb.org/t/p/w500/xWT5F1DNxciNLEMXRl49iq8zvN7.jpg')] ">
        {movies.map((movie, index) => (
          <>
            <Navigation />
            <div key={index} className="text-white mt-3">
              <div className="flex text-xs">
                <p className="">{movie.date.slice(0, 4)}</p>
                <p className="mx-2">{seperator}</p>
                <p>{Math.round(movie.popularity) / 10}/10</p>
              </div>
              <h2 className="uppercase my-2 text-2xl">{movie.title}</h2>
              <p className="text-sm">Genre ID: {movie.genreId}</p>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}

export default App;
