import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#find-events">Find Events</a></li>
          <li><a href="#create-event">Create Event</a></li>
          <li><a href="#help-center">Help Center</a></li>
          <li><a href="#find-tickets">Find My Tickets</a></li>
          <li><a href="#login">Log In</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
