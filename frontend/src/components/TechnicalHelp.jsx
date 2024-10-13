// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TechnicalHelp.css';
import './Dashboard.css'; // Import sidebar styles

const TechnicalHelp = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/dashboard');
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
    <div className="dashboard-container">
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
            <a href="#" onClick={(e) => e.preventDefault()}>
              Inventory
            </a>
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
            <a href="#" onClick={() => navigate('/technical')}>
              Get Technical Help
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        
        <div className="technical">
          <h1 className="title">Technical Support</h1>
          <p className="intro">
            Our Technical Support team is dedicated to ensuring that your experience with our Pharmacy Management System is smooth and efficient. We offer comprehensive support to address any technical issues, system inquiries, or troubleshooting needs you may have.
          </p>
          <ul className="contact-info">
            <li>
              <span className="icon">📧</span>
              Email: <a href="mailto:lathikahasaranga@gmail.com">lathikahasaranga@gmail.com</a>
            </li>
            <li>
              <span className="icon">📞</span>
              Phone: (074) 306-3742
            </li>
          </ul>
          <p className="closing">
            Our goal is to provide you with exceptional service and support to ensure that your pharmacy management system operates smoothly and effectively. If you have any questions or need help, don’t hesitate to reach out to us.
          </p>
        </div>
      </main>
    </div>
  );
};

export default TechnicalHelp;
