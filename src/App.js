import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation/Nav";
import ButtonWatch from "./components/main/ButtonWatch";
import Popular from "./components/getMovies/Popular";

const seperator = " | ";

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=Blade+Runner+2049&api_key=4a27561cb4efc07bd11f3574a64dbf50"
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

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=4a27561cb4efc07bd11f3574a64dbf50&language=en-EN"
        );

        if (!res.ok) {
          throw new Error(`Erreur HTTP :${res.status}`);
        }
        const dataGenres = await res.json();

        const genresMap = dataGenres.genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});

        setGenres(genresMap);
      } catch (error) {
        console.log("une erreur est survenue:", error);
      }
    };
    fetchGenres();
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="bg-[url('https://image.tmdb.org/t/p/w500/ilRyazdMJwN05exqhwK4tMKBYZs.jpg')] bg-cover">
        <div className="p-3">
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

                <ul className="flex items-center text-md">
                  {movie.genreId.map((genreId) => (
                    <>
                      <p className="pr-2">{seperator}</p>
                      <li key={genreId} className=" mr-2">
                        {genres[genreId]}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </>
          ))}
          <ButtonWatch />
        </div>
      </div>
      <div className="bg-gradient-to-b from-topGradient to-bottomGradient flex-grow">
        <Popular />
      </div>
    </main>
  );
}

export default App;
