import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <main>
      <section className="banner">
        <h1>Smart Event Management Platform.</h1>
        <button>Make Plans</button>
        <button>Explore Events</button>
      </section>
      <section className="categories">
        <div className="category">Music</div>
        <div className="category">Nightlife</div>
        <div className="category">Performing Arts</div>
        <div className="category">Holidays</div>
        <div className="category">Dating</div>
        <div className="category">Hobbies</div>
        <div className="category">Business</div>
        <div className="category">Food & Drink</div>
      </section>
    </main>
  );
}

export default LandingPage;
