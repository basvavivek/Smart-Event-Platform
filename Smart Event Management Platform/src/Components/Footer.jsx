import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <p>© 2025 Your Company Name. All rights reserved.</p>
        <Link to="/about">About Us</Link> | <Link to="/contact">Contact</Link> | 
        <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}
