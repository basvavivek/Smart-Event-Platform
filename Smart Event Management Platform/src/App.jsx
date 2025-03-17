import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer"; // ✅ Import Footer
import HomePage from "./components/HomePage";

import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./Components/LoginPage";
import Header from "./components/Header";


function App() {
  return (
    <AuthProvider>
      <Router>
     <Header />
        <div className="content"> {/* Wrapper for content */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        {/*Footer /> {/* ✅ Footer added */}
      </Router>
    </AuthProvider>
  );
}

export default App;
