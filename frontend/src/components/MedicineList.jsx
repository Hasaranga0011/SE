// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './MedicineList.css';
import axios from 'axios';

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [editForm, setEditForm] = useState({
    medicineName: '',
    medicineID: '',
    medicineGroup: '',
    price: '',
    expireDate: '',
    quantity: '',
    howToUse: '',
    sideEffects: '',
    supplierName: '', 
  });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/auth/medlist');
      setMedicines(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching medicine data:', error);
      setLoading(false);
    }
  };

  const handleSelectMedicine = (medicine) => {
    if (selectedMedicine?.medicineID === medicine.medicineID) {
      setSelectedMedicine(null);
      setIsEditing(false);
    } else {
      setSelectedMedicine(medicine);
      setEditForm({
        medicineName: medicine.medicineName,
        medicineID: medicine.medicineID,
        medicineGroup: medicine.medicineGroup,
        price: medicine.price,
        expireDate: medicine.expireDate,
        quantity: medicine.quantity,
        howToUse: medicine.howToUse,
        sideEffects: medicine.sideEffects,
        supplierName: medicine.supplierName,
      });
      setIsEditing(false);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/updateMedicine', editForm);
      if (response.data.status) {
        fetchMedicines();
        setSelectedMedicine(null);
        setIsEditing(false);
      } else {
        console.error('Error updating medicine:', response.data.message);
      }
    } catch (error) {
      console.error('Error updating medicine:', error);
    }
  };

  const handleDeleteClick = async (medicineID) => {
    try {
      await axios.delete(`http://localhost:3000/auth/deleteMedicine/${medicineID}`);
      fetchMedicines();
      setSelectedMedicine(null);
      setIsEditing(false);
    } catch (error) {
      console.error('Error deleting medicine:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    return `LKR ${isNaN(numericPrice) ? '0.00' : numericPrice.toFixed(2)}`;
  };

  const formatDate = (date) => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return parsedDate.toLocaleDateString('en-US', options);
  };

  const filteredMedicines = medicines.filter(medicine =>
    medicine.medicineName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="medicine-list-container">
      <div className="header">
        <h2>Inventory &gt; List of Medicines</h2>
        <p>List of medicines available for sales.</p>
      </div>

      {!selectedMedicine && (
        <div className="top-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search in Medicine Details..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!selectedMedicine ? (
            <table className="medicine-list-table">
              <thead>
                <tr>
                  <th>Medicine ID</th>
                  <th>Medicine Name</th>
                  <th>Group Name</th>
                  <th>Price</th>
                  <th>Expire Date</th>
                  <th>Stock in Qty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredMedicines.map((medicine, index) => (
                  <tr key={index}>
                    <td>{medicine.medicineID}</td>
                    <td>{medicine.medicineName}</td>
                    <td>{medicine.medicineGroup}</td>
                    <td>{formatPrice(medicine.price)}</td>
                    <td>{formatDate(medicine.expireDate)}</td>
                    <td>{medicine.quantity}</td>
                    <td>
                      <button
                        className="view-button"
                        onClick={() => handleSelectMedicine(medicine)}
                      >
                        View Full Detail »
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="medicine-detail-view">
              <h3>{selectedMedicine.medicineName}</h3>
              {!isEditing ? (
                <>
                  <div className="medicine-details">
                    <p><strong>Medicine ID:</strong> {selectedMedicine.medicineID}</p>
                    <p><strong>Group Name:</strong> {selectedMedicine.medicineGroup}</p>
                    <p><strong>Price:</strong> {formatPrice(selectedMedicine.price)}</p>
                    <p><strong>Expire Date:</strong> {formatDate(selectedMedicine.expireDate)}</p>
                    <p><strong>Quantity:</strong> {selectedMedicine.quantity}</p>
                    <p><strong>Supplier Name:</strong> {selectedMedicine.supplierName}</p>
                    <p><strong>How to Use:</strong> {selectedMedicine.howToUse}</p>
                    <p><strong>Side Effects:</strong> {selectedMedicine.sideEffects}</p>
                  </div>
                  <button
                    className="edit-button"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Details
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteClick(selectedMedicine.medicineID)}
                  >
                    Delete Medicine
                  </button>
                  <button
                    className="back-button"
                    onClick={() => setSelectedMedicine(null)}
                  >
                    Back to List
                  </button>
                </>
              ) : (
                <form onSubmit={handleEditSubmit} className="edit-form">
                  <h4>Edit Medicine</h4>
                  <label>
                    Medicine Name:
                    <input
                      type="text"
                      name="medicineName"
                      value={editForm.medicineName}
                      onChange={handleEditChange}
                      required
                    />
                  </label>
                  <label>
                    Group Name:
                    <input
                      type="text"
                      name="medicineGroup"
                      value={editForm.medicineGroup}
                      onChange={handleEditChange}
                      required
                    />
                  </label>
                  <label>
                    Price:
                    <input
                      type="number"
                      step="0.01"
                      name="price"
                      value={editForm.price}
                      onChange={handleEditChange}
                      required
                    />
                  </label>
                  <label>
                    Expire Date:
                    <input
                      type="date"
                      name="expireDate"
                      value={editForm.expireDate}
                      onChange={handleEditChange}
                      required
                    />
                  </label>
                  <label>
                    Quantity:
                    <input
                      type="number"
                      name="quantity"
                      value={editForm.quantity}
                      onChange={handleEditChange}
                      required
                    />
                  </label>
                  <label>
                    Supplier Name: 
                    <input
                      type="text"
                      name="supplierName"
                      value={editForm.supplierName}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    How to Use:
                    <textarea
                      name="howToUse"
                      value={editForm.howToUse}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Side Effects:
                    <textarea
                      name="sideEffects"
                      value={editForm.sideEffects}
                      onChange={handleEditChange}
                    />
                  </label>
                  <div className="edit-form-buttons">
                    <button type="submit">Save Changes</button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MedicineList;
