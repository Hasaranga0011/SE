/*import React from 'react';
import './AddMedicine.css';


const AddMedicine = () => {
  return (
    <div className="add-medicine-container">
      <header className="add-medicine-header">
        <h2>Inventory &gt; List of Medicines &gt; Add New Medicine</h2>
        <p>*All fields are mandatory, except mentioned as (optional).</p>
      </header>
      <form className="add-medicine-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="medicineName">Medicine Name</label>
            <input type="text" id="medicineName" name="medicineName" required />
          </div>
          <div className="form-group">
            <label htmlFor="medicineID">Medicine ID</label>
            <input type="text" id="medicineID" name="medicineID" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="medicineGroup">Medicine Group</label>
            <select id="medicineGroup" name="medicineGroup" required>
              <option value="">- Select Group -</option>
            */  {/* Add options dynamically if available */}/*
           </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity in Number</label>
            <input type="number" id="quantity" name="quantity" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" required />
          </div>
          <div className="form-group">
            <label htmlFor="expireDate">Expire Date</label>
            <input type="month" id="expireDate" name="expireDate" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="supplierName">Supplier Name</label>
            <input type="text" id="supplierName" name="supplierName" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="howToUse">How to Use</label>
            <textarea id="howToUse" name="howToUse" rows="3" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="sideEffects">Side Effects</label>
            <textarea id="sideEffects" name="sideEffects" rows="3" required></textarea>
          </div>
        </div>

        <button type="submit" className="btn-save">Save Details</button>
      </form>
    </div>
  );
};

export default AddMedicine;
*/

/*import React from 'react';
import './AddMedicine.css';

const AddMedicine = () => {
  return (
    <div className="add-medicine-container">
      <header className="add-medicine-header">
        <h2>Inventory &gt; List of Medicines &gt; Add New Medicine</h2>
       
      </header>
      <form className="add-medicine-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="medicineName">Medicine Name</label>
            <input type="text" id="medicineName" name="medicineName" required />
          </div>
          <div className="form-group">
            <label htmlFor="medicineID">Medicine ID</label>
            <input type="text" id="medicineID" name="medicineID" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="medicineGroup">Medicine Group</label>
            <select id="medicineGroup" name="medicineGroup" required>
              <option value="">- Select Group -</option>
             
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity in Number</label>
            <input type="number" id="quantity" name="quantity" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" required />
          </div>
          <div className="form-group">
            <label htmlFor="expireDate">Expiry Date</label>
            <input type="date" id="expireDate" name="expireDate" required /> 
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="supplierName">Supplier Name</label>
            <input type="text" id="supplierName" name="supplierName" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="howToUse">How to Use</label>
            <textarea id="howToUse" name="howToUse" rows="3" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="sideEffects">Side Effects</label>
            <textarea id="sideEffects" name="sideEffects" rows="3" required></textarea>
          </div>
        </div>

        <button type="submit" className="btn-save">Save Details</button>
      </form>
    </div>
  );
};

export default AddMedicine;
*/
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './AddMedicine.css';

const AddMedicine = () => {
  const [medicineData, setMedicineData] = useState({
    medicineName: '',
    medicineID: '',
    medicineGroup: '',
    quantity: '',
    price: '',
    expireDate: '',
    supplierName: '',
    howToUse: '',
    sideEffects: ''
  });

  const handleChange = (e) => {
    setMedicineData({
      ...medicineData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/addMedicine', medicineData, {
        withCredentials: true
      });
      if (response.data.status) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="add-medicine-container">
      <header className="add-medicine-header">
        <h2>Inventory &gt; List of Medicines &gt; Add New Medicine</h2>
      </header>
      <form className="add-medicine-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="medicineName">Medicine Name</label>
            <input
              type="text"
              id="medicineName"
              name="medicineName"
              value={medicineData.medicineName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="medicineID">Medicine ID</label>
            <input
              type="text"
              id="medicineID"
              name="medicineID"
              value={medicineData.medicineID}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="medicineGroup">Medicine Group</label>
            <select
              id="medicineGroup"
              name="medicineGroup"
              value={medicineData.medicineGroup}
              onChange={handleChange}
              required
            >
              <option value="">- Select Group -</option>
              <option value="Analgesics">Analgesics</option>
              <option value="Antibiotics">Antibiotics</option>
              <option value="Antiseptics">Antiseptics</option>
              <option value="Vitamins">Vitamins</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity in Number</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={medicineData.quantity}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={medicineData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expireDate">Expire Date</label>
            <input
              type="date"
              id="expireDate"
              name="expireDate"
              value={medicineData.expireDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="supplierName">Supplier Name</label>
            <input
              type="text"
              id="supplierName"
              name="supplierName"
              value={medicineData.supplierName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="howToUse">How to Use</label>
            <textarea
              id="howToUse"
              name="howToUse"
              rows="3"
              value={medicineData.howToUse}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="sideEffects">Side Effects</label>
            <textarea
              id="sideEffects"
              name="sideEffects"
              rows="3"
              value={medicineData.sideEffects}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn-save">Save Details</button>
      </form>
    </div>
  );
};

export default AddMedicine;
