import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (

      <div className="categories">
        <button>Music</button>
        <button>Nightlife</button>
        <button>Performing Arts</button>
        <button>Holidays</button>
        <button>Dating</button>
        <button>Hobbies</button>
        <button>Business</button>
        <button>Food & Drink</button>
      </div>
  );
}
