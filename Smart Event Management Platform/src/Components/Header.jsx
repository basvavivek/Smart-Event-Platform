import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/find-events">Find Events</Link></li>
          <li><Link to="/create-event">Create Event</Link></li>
          <li><Link to="/help-center">Help Center</Link></li>
          <li><Link to="/find-tickets">Find My Tickets</Link></li>
          {user ? (
            <>
              <li><Link to="/profile">{user.name}</Link></li>
              <li><button onClick={logout} className="logout-btn">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
