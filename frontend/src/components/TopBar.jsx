import React from 'react';
//import './TopBar.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const TopBar = ({ greeting, dateTime }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logged out");
    navigate('/login');
  };

  return (
    <div className="top-bar">
      <input
        type="text"
        placeholder="Search for anything here..."
        className="search-bar"
      />
      <div className="top-bar-right">
        <span>{greeting}</span>
        <span>
          {dateTime.toLocaleDateString()} · {dateTime.toLocaleTimeString()}
        </span>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;
