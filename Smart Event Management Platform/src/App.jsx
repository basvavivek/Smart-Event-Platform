import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // ✅ Import Footer
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { AuthProvider } from "./context/AuthContext";

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
        <Footer /> {/* ✅ Footer added */}
      </Router>
    </AuthProvider>
  );
}

export default App;
