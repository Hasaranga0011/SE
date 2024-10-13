// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './Pharmacist.css';


export const Pharmacist = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const navigate = useNavigate(); // Initialize navigate for logout


  // Update time and greeting
  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      setDateTime(currentTime);
      setGreeting(getGreeting(currentTime));
    }, 1000);

    return () => clearInterval(timer);  // Clean up the timer
  }, []);

  const handleContactManagementClick = () => {
    navigate('/contact');
  };

  const handleBillingManagementClick = () => {
    navigate('/billing'); // Navigate to the billing page
  };

    // Logout handler function
    const handleLogout = () => {
      console.log('Logged out');
      navigate('/login'); // Navigate back to the login page
    };
  

  // Function to get greeting based on time
  const getGreeting = (currentTime) => {
    const hour = currentTime.getHours();
    if (hour < 12) {
      return 'Good Morning!';
    } else if (hour < 15) {
      return 'Good Afternoon!';
    } else {
      return 'Good Evening!';
    }
  };



  return (
    
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <div className="profile-section">
          {/* Placeholder image */}
          <img 
            src="https://th.bing.com/th/id/R.5f02b5d6b2040f8a9f01ee632f8dd062?rik=NVCBL3U0T6yHJg&pid=ImgRaw&r=0" 
            alt="Pharmacist" 
            className="profile-image"
          />
          <p>Union Pharmacy</p>
        </div>
        <ul className="nav-list">
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#inventory">Inventory</a></li>
          <li><a href="#" onClick={handleBillingManagementClick}>Billing Management</a></li> {/* Click triggers navigate */}
          <li><a href="#reports">Reports</a></li>
          <li><a href="#" onClick={handleContactManagementClick}>Contact Management</a></li>
          <li><a href="#notifications">Notifications</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <header className="dashboard-header">
          <div>
            <h1>Welcome to the Pharmacist Dashboard</h1>
            <p>{greeting}</p>
            <p>{dateTime.toLocaleString()}</p>
          </div>
          {/* Logout Button */}
          <div>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        <div className="overview-cards">
          <div className="card">
            <p className="card-title">Good</p>
            <p>Inventory Status</p>
            <button>View Detailed Report</button>
          </div>
          <div className="card">
            <p className="card-title">298</p>
            <p>Medicines Available</p>
            <button>Visit Inventory</button>
          </div>
          <div className="card">
            <p className="card-title">01</p>
            <p>Medicine Shortage</p>
            <button>Resolve Now</button>
          </div>
        </div>

        <div className="reports-section">
          <div className="report-card">
            <h3>Inventory</h3>
            <p>Total no of Medicines: 51</p>
            <p>Medicine Groups: 24</p>
          </div>
          <div className="report-card">
            <h3>Quick Report</h3>
          </div>
          <div className="report-card">
            <h3>My Pharmacy</h3>
            <p>Total no of Suppliers: 04</p>
            <p>Total no of Users: 05</p>
          </div>
        </div>
      </div>
    </div>
  );
};
