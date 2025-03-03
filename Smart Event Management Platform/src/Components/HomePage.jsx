import React from "react";
import "./HomePage.css";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

function HomePage() {
  return (
    <>
      <Header />
      <div className="home-container">
        <section className="hero">
          <h1>Welcome to Smart Event Management Platform</h1>
          <p>Plan, organize, and explore amazing events effortlessly!</p>
          <div className="cta-buttons">
            <button className="btn primary">Make Plans</button>
            <button className="btn secondary">Explore Events</button>
          </div>
        </section>

        <LandingPage /> {/* ✅ Display categories and features */}

        <section className="features">
          <h2>Why Choose Us?</h2>
          <div className="feature-list">
            <div className="feature">
              <h3>Easy Event Planning</h3>
              <p>Create and manage your events with just a few clicks.</p>
            </div>
            <div className="feature">
              <h3>Seamless Ticket Booking</h3>
              <p>Find and book tickets for various events effortlessly.</p>
            </div>
            <div className="feature">
              <h3>Real-Time Updates</h3>
              <p>Stay updated with event schedules, changes, and alerts.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
