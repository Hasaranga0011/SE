/*
import React from 'react';
import './Inventory.css'; // Assuming you have a CSS file for styling

const Inventory = () => {
  return (
    <div className="inventory-container">
      <header className="inventory-header">
        <h1>Inventory</h1>
        <p>List of medicines available for sales.</p>
      </header>
      <div className="inventory-cards">
        <div className="inventory-card available">
          <h2>298</h2>
          <p>Medicines Available</p>
          <button className="btn-view">View Full List</button>
        </div>
        <div className="inventory-card groups">
          <h2>02</h2>
          <p>Medicine Groups</p>
          <button className="btn-view">View Groups</button>
        </div>
        <div className="inventory-card shortage">
          <h2>01</h2>
          <p>Medicine Shortage</p>
          <button className="btn-resolve">Resolve Now</button>
        </div>
      </div>
      <button className="btn-add">+ Add New Item</button>
    </div>
  );
};

export default Inventory;*/
// src/components/Inventory.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate for React Router v6
import './Inventory.css'; // Assuming you have a CSS file for styling

const Inventory = () => {
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleAddNewItem = () => {
    navigate('/addMedicine'); // Using navigate function for navigation
  };

  // Define the navigation handlers
  const handleTechnicalHelpClick = () => {
    navigate('/technical'); // Redirect to Technical Help page
  };

  const handleMedicineListClick = () => {
    navigate('/medlist'); // Redirect to Medicine List page
  };

  const handleMedicineGroupClick = () => {
    navigate('/medgroup'); // Redirect to Medicine Group page
  };

  const handleContactManagementClick = () => {
    navigate('/contact'); // Redirect to Contact Management page
  };

  return (
    <div className="inventory-container">
      {/* Main Content */}
      <main className="main-content">
        <header className="inventory-header">
          <h1>Inventory</h1>
          <p>List of medicines available for sales.</p>
        </header>
        <div className="inventory-cards">
          <div className="inventory-card available">
            <p>Medicines Available</p>
            <button className="btn-view" onClick={handleMedicineListClick}>View Full List</button>
          </div>
          <div className="inventory-card groups">
            <p>Medicine Groups</p>
            <button className="btn-view" onClick={handleMedicineGroupClick}>View Groups</button>
          </div>
          <div className="inventory-card shortage">
            <p>Medicine Shortage</p>
            <button className="btn-resolve">Resolve Now</button>
          </div>
        </div>
        <button className="btn-add" onClick={handleAddNewItem}>+ Add New Item</button>
      </main>
    </div>
  );
};

export default Inventory;

