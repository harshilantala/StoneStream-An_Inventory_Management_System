import React, { useState } from "react";
import "../styles/ProfileSettings.css";
import Navbar2 from "../components/Navbar2.js";

const ProfileSettings = () => {
  // Initial state for user details
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Street, City, Country",
    image: null,
  });

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input for profile image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  // Simulate form submission (You would replace this with an API call)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", userData);
    // You can add the logic here to send data to your backend
  };

  return (
    <>
      <Navbar2 />

      <div className="profile-settings-wrapper">
        <div className="profile-settings-container">
          <h2>Profile Settings</h2>
          <form onSubmit={handleSubmit} className="profile-form">
            {/* Profile Image */}
            <div className="profile-image-section">
              <img
                src={
                  userData.image
                    ? URL.createObjectURL(userData.image)
                    : "https://via.placeholder.com/150"
                }
                alt="Profile"
                className="profile-img"
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {/* Name */}
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Address */}
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleInputChange}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
