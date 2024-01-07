import React from "react";

const src = "/images/logo.png";
const alt = "Logo de la plateforme HBOmax";

export default function Logo() {
  return (
    <div>
      <img src={src} alt={alt} className="w-14" />
    </div>
  );
}
