import React from "react";

const watch = "Watch Now";
const src = "./images/play.png";
const alt = "Bouton play";

export default function ButtonWatch() {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-center  border border-white p-1 w-24 rounded-lg text-xs">
        <img src={src} alt={alt} className="w-4 h-4" />
        <p className="text-white ml-1">{watch}</p>
      </div>
    </div>
  );
}
