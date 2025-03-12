import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("User signed up:", { fullName, email, phoneNumber, gender, dob });
    navigate("/login"); // Redirect to Login Page after signup
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" placeholder="Full Name" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="tel" placeholder="Phone Number" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <div className="gender-container">
          <label>Gender:</label>
          <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
          <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
          <input type="radio" name="gender" value="Other" onChange={(e) => setGender(e.target.value)} /> Other
        </div>
        <input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>
  );
}