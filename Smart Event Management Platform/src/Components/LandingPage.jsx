import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="title">Smart Event Management Platform</h1>
      
      <div className="button-container">
        <Link to="/make-plans" className="btn primary">Make Plans</Link>
        <Link to="/explore-events" className="btn primary">Explore Events</Link>
      </div>

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
    </div>
  );
}
