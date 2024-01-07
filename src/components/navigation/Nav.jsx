import React from "react";

import Logo from "./Logo.jsx";
import Profil from "./Profil.jsx";

const links = [
  {
    title: "Movies",
  },
  {
    title: "TV shows",
  },
];

export default function Navigation() {
  return (
    <nav
      className="rounded-lg text-white shadow-md"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex justify-between">
        <Logo />
        <ul className="flex ">
          {links.map((link, index) => (
            <li key={index}>
              <p>{link.title}</p>
            </li>
          ))}
        </ul>
        <Profil />
      </div>
    </nav>
  );
}
