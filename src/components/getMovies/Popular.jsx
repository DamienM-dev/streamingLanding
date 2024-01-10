import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";

const title = "Popular Collection";

export default function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=4a27561cb4efc07bd11f3574a64dbf50"
        );
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        const data = await res.json();

        const backdrops = data.results.map((movie) => movie.poster_path);
        setMovies(backdrops);
      } catch (error) {
        console.error("Une erreur est survenue", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h2 className="p-3 text-white">{title}</h2>
      <div className="flex">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {movies.map((backdrop, index) => (
            <div key={index}>
              <SwiperSlide>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${backdrop}`}
                  alt="movie"
                  className="w-full"
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
