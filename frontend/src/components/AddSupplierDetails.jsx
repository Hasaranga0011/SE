import React, { useState } from 'react';
import axios from 'axios';
import './AddSupplierDetails.css';

const AddSupplierDetails = () => {
  const [supplierName, setSupplierName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [supplierIDToDelete, setSupplierIDToDelete] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const resetForm = () => {
    setSupplierName('');
    setContactNumber('');
    setEmail('');
    setSupplierIDToDelete('');
    setErrorMessage('');
  };

  const handleAddSupplier = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:3000/auth/addSupplier', {
        supplierName,
        contactNumber,
        email
      });

      alert(response.data.message);
      resetForm();
    } catch (error) {
      console.error('There was an error adding the supplier:', error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  const handleDeleteSupplier = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!supplierIDToDelete) {
      alert('Please enter a valid Supplier ID to delete.');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:3000/auth/deleteSupplier/${supplierIDToDelete}`);
      alert(response.data.message);
      resetForm();
    } catch (error) {
      console.error('There was an error deleting the supplier:', error.response?.data?.message || error.message);
      alert('Failed to delete the supplier. Please try again.');
      setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="add-supplier-container">
      <h2>Add Supplier Details</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form className="supplier-form" onSubmit={handleAddSupplier}>
        <div className="form-group">
          <label>Supplier Name</label>
          <input 
            type="text" 
            placeholder="Enter Supplier Name" 
            value={supplierName} 
            onChange={(e) => setSupplierName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input 
            type="text" 
            placeholder="Enter Contact Number" 
            value={contactNumber} 
            onChange={(e) => setContactNumber(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="loading-button">Add Supplier</button>
        </div>
      </form>

      <h2>Delete Supplier</h2>
      <form className="supplier-form" onSubmit={handleDeleteSupplier}>
        <div className="form-group">
          <label>Supplier ID</label>
          <input 
            type="text" 
            placeholder="Enter Supplier ID to delete" 
            value={supplierIDToDelete} 
            onChange={(e) => setSupplierIDToDelete(e.target.value)} 
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="delete-button">Delete Supplier</button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplierDetails;
