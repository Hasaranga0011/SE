// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './ContactManagement.css'; // Import your CSS file for styling

const ContactManagement = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleTechnicalHelpClick = () => {
    navigate('/technical');
  };

  const handleInventoryClick = () => {
    navigate('/inventory');
  };

  const handleMedicineListClick = () => {
    navigate('/medlist');
  };

  const handleMedicineGroupClick = () => {
    navigate('/medgroup');
  };

  const handleContactManagementClick = () => {
    navigate('/contact');
  };

  return (
    <div className="contact-management-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Union Pharmacy</h2>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); handleDashboardClick(); }}>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); handleInventoryClick(); }}>Inventory</a>
            <ul className="submenu">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMedicineListClick(); }}>
                  List of Medicines
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMedicineGroupClick(); }}>
                  Medicine Groups
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
            <a href="#" onClick={handleContactManagementClick}>
              Contact Management
            </a>
          </li>
          <li>
            <a href="#">Notifications</a>
          </li>
          <li>
            <a href="#" onClick={handleTechnicalHelpClick}>
              Get Technical Help
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="contact-management">
          <h1>Contact Management</h1>
          <div className="contact-info">
            <h2>Pharmacy Details</h2>
            <p>
              <span className="icon">🏥</span>
              <strong>Full Name of the Pharmacy:</strong> Union Dispensary Pvt Ltd
            </p>
            <p>
              <span className="icon">📞</span>
              <strong>Pharmacy Phone Number:</strong> 041222072
            </p>
            <p>
              <span className="icon">📧</span>
              <strong>Pharmacy Email Address:</strong>
              <a href="mailto:unionimportsmatara@gmail.com">unionimportsmatara@gmail.com</a>
            </p>

            <h2>Owner Details</h2>
            <p>
              <span className="icon">👤</span>
              <strong>Owner Name:</strong> H Godakanda
            </p>
            <p>
              <span className="icon">📞</span>
              <strong>Owner Phone Number:</strong> 0703062000
            </p>
            <p>
              <span className="icon">📧</span>
              <strong>Owner Email Address:</strong>
              <a href="mailto:hgodakanda061@gmail.com">hgodakanda061@gmail.com</a>
            </p>
            <p>
              <span className="icon">📍</span>
              <strong>Owner Address:</strong> No:4/A Sri Karatota Nahimi Mawatha, Matara, Sri Lanka
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactManagement;
