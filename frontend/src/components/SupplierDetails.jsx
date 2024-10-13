import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SupplierDetails.css'; // Import the CSS for styling

const SupplierDetails = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null); // To track selected supplier
  const [isModalOpen, setIsModalOpen] = useState(false); // To track modal visibility
  const [showSupplierTable, setShowSupplierTable] = useState(false); // To toggle supplier table visibility

  // Fetch suppliers from the backend
  useEffect(() => {
    fetch('/api/suppliers') // Ensure this path matches your backend
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Expecting JSON response
      })
      .then(data => setSuppliers(data))
      .catch(error => console.error('Error fetching suppliers:', error));
  }, []);

  // Function to handle the button click to add a supplier
  const handleAddSupplierClick = () => {
    navigate('/add-supplier'); // Redirect to AddSupplierDetails page
  };

  // Function to toggle the supplier table visibility
  const handleViewAllSuppliers = () => {
    setShowSupplierTable(!showSupplierTable); // Toggle visibility of supplier table
  };

  // Function to open modal with supplier details
  const handleViewFullDetails = (supplier) => {
    setSelectedSupplier(supplier); // Set the selected supplier
    setIsModalOpen(true); // Open modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSupplier(null);
  };

  return (
    <div className="supplier-container">
      <div className="supplier-header">
        <h1>Supplier Information</h1>
        <p>View Supplier details</p>
      </div>

      <div className="supplier-content">
        {/* Total Number of Suppliers Card */}
        <div className="supplier-card">
          <div className="card-icon">
            <i className="fas fa-briefcase-medical"></i> {/* Font Awesome icon */}
          </div>
          <div className="card-info">
            <h2>{suppliers.length}</h2>
            <p>Total Number of Suppliers</p>
          </div>
          <button className="view-list-button" onClick={handleViewAllSuppliers}>
            {showSupplierTable ? 'Hide Supplier List' : 'View Full List'} <span className="arrow">»</span>
          </button>
        </div>

        {/* Add Supplier Button */}
        <button className="add-supplier-button" onClick={handleAddSupplierClick}>
          <i className="fas fa-pen"></i> Add Supplier
        </button>

        {/* Supplier Details Table - Shown when "View Full List" is clicked */}
        {showSupplierTable && (
          <div className="supplier-table-container">
            <table className="supplier-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Actions</th> {/* Added Actions column */}
                </tr>
              </thead>
              <tbody>
                {suppliers.map(supplier => (
                  <tr key={supplier.supplierID}>
                    <td>{supplier.supplierID}</td>
                    <td>{supplier.supplierName}</td>
                    <td>{supplier.contactNumber}</td>
                    <td>{supplier.email}</td>
                    <td>
                      <button onClick={() => handleViewFullDetails(supplier)}>
                        View Full Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal for viewing supplier details */}
        {isModalOpen && selectedSupplier && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Supplier Details</h2>
              <p><strong>ID:</strong> {selectedSupplier.supplierID}</p>
              <p><strong>Name:</strong> {selectedSupplier.supplierName}</p>
              <p><strong>Contact:</strong> {selectedSupplier.contactNumber}</p>
              <p><strong>Email:</strong> {selectedSupplier.email}</p>
              <button className="close-modal-button" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplierDetails;
