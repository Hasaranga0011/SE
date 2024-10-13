// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './BillingManagement.css';

export const BillingManagement = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="billing-management-container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <div className="profile-section">
          <img 
            src="https://th.bing.com/th/id/R.5f02b5d6b2040f8a9f01ee632f8dd062?rik=NVCBL3U0T6yHJg&pid=ImgRaw&r=0"
            alt="Pharmacist"
            className="profile-image"
          />
          <p>Pharmacist</p>
        </div>
        <ul className="nav-list">
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#inventory">Inventory</a></li>
          <li><a className="active" href="#billing">Billing Management</a></li>
          <li><a href="#reports">Reports</a></li>
          <li><a href="#contact">Contact Management</a></li>
          <li><a href="#notifications">Notifications</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <header className="content-header">
          <div className="greeting">
            <span className="greeting-circle"></span>
            <span className="greeting-text">Good Morning</span>
          </div>
          <div className="date-time">
            <p>{currentTime.toLocaleDateString()}</p>
            <p>{currentTime.toLocaleTimeString()}</p>
          </div>
        </header>

        {/* Billing Management Section */}
        <div className="billing-section">
          <h2>Billing Management</h2>
          <div className="billing-form">
            <div className="form-row">
              <label>Customer Name</label>
              <input type="text" placeholder="Enter patient name" />
            </div>
            <div className="form-row">
              <label>Customer Contact Number</label>
              <input type="text" placeholder="Enter contact number" />
            </div>
            <div className="form-row">
              <label>Item Name</label>
              <input type="text" placeholder="Search here" />
            </div>
            <div className="form-row">
              <label>Bill Date</label>
              <input type="date" id="bilDate" name="billDate" />
            </div>
            <div className="form-row">
              <label>Print Type</label>
              <select>
                <option>Pre Print</option>
                <option>Post Print</option>
              </select>
            </div>
            <div className="form-row">
              <label>Payment Mode</label>
              <input type="text" placeholder='Enter Payment mode'/>
            </div>
          </div>

          <table className="medicine-table">
            <thead>
              <tr>
                <th>Medicine ID</th>
                <th>Medicine Name</th>
                <th>Brand</th>
                <th>Batch Number</th>
                <th>Medicine Group</th>
              </tr>
            </thead>
            <tbody>
              {/* Add dynamic rows here */}
            </tbody>
          </table>

          <div className="billing-actions">
            <div className="medicine-actions">
              <input type="text" placeholder="Quantity" />
              <button className="add-btn">Add</button>
              <button className="delete-btn">Delete</button>
            </div>

            <table className="invoice-table">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Medicine Name</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* Add dynamic invoice rows here */}
              </tbody>
            </table>
          </div>

          <div className="billing-summary">
            <div className="summary-row">
              <label>Net Total</label>
              <input type="text" readOnly />
            </div>
            <div className="summary-row">
              <label>Cash</label>
              <input type="text" readOnly />
            </div>
            <div className="summary-row">
              <label>Balance</label>
              <input type="text" className="balance" readOnly />
            </div>
          </div>

          <div className="form-actions">
            <button className="save-btn">Save</button>
            <button className="clear-btn">Clear</button>
            <button className="exit-btn">Exit</button>
            <button className="print-btn">Print Invoice</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingManagement;
