import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedProfileImage = localStorage.getItem("profileImage");
    setUsername(storedUsername || "");
    setProfileImage(storedProfileImage || "");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("profileImage");
    localStorage.removeItem("token"); // Clear token on logout
    setUsername("");
    setProfileImage("");
    setDropdownOpen(false);
    navigate("/login"); // Redirect to the login page
  };

  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="flex justify-between bg-blue-500 font-bold text-white items-center p-4">
      {isAuthenticated && <p>Welcome back! {username}</p>}
      <div className="flex gap-4">
        <ul className="flex gap-10">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        </ul>
      </div>
      {isAuthenticated && (
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)}>
            <FaUserCircle className="w-8 h-8" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 bg-white text-black p-2 rounded shadow mt-2 w-48 z-50">
              <div className="flex items-center gap-2 mb-2">
                <img
                  className="w-12 h-12 rounded-full"
                  src={`http://localhost:5000/${profileImage}`} // Adjust the path as needed
                  alt={`${username}'s profile`}
                  onError={(e) => { e.target.src = 'path_to_default_image'; }} // Replace with your default image path
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">{username}</h2>
                  <button onClick={handleLogout} className="mt-1 text-red-500 w-full text-left">Logout</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
