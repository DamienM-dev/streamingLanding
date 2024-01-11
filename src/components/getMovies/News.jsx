import React, { useEffect } from "react";

const newRealse = "New Release";

export default function News() {
  useEffect(() => {
    const getNewRealease = async () => {
      try {
        const res = fetch(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=4a27561cb4efc07bd11f3574a64dbf50&language=en_EN"
        );
      } catch (error) {}
    };
  });

  return (
    <div>
      <h2>{newRealse}</h2>u
      <div>
        <img />
        <h3></h3>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
