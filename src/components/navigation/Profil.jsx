import React from "react";

const src = "/images/profil2.png";
const alt = "Image de profil utilisateur";

export default function Profil() {
  return (
    <div>
      <img src={src} alt={alt} className="w-10" />
    </div>
  );
}
