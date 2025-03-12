import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Profile.css"; // ✅ Add a CSS file for better styling
import Header from "./Header";
import Footer from "./Footer";

function Profile() {
  const { user, setUser } = useAuth();
  const [selectedImage, setSelectedImage] = useState(user?.photo || null);

  if (!user) {
    return <h2>Please log in to view your profile.</h2>;
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setUser({ ...user, photo: imageUrl });
    }
  };

  return (
    <>
      <div className="profile-container">
        <div className="profile-card">
          <h2>Profile</h2>
          <div className="profile-image">
            {selectedImage ? (
              <img src={selectedImage} alt="Profile" />
            ) : (
              <div className="no-photo">No photo uploaded</div>
            )}
          </div>
          <div className="profile-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="upload-btn" />
        </div>
      </div>
    </>
  );
}

export default Profile;
