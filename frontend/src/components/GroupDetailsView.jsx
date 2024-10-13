// GroupDetailsView.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './GroupDetailsView.css'; // Update with actual styles or create a new CSS file

const GroupDetailsView = () => {
  const { groupName } = useParams(); // Get the group name from the URL params

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicineName, setMedicineName] = useState('');
  const [medicineCount, setMedicineCount] = useState('');

  // Mock data; replace with actual data fetching if needed
  const groupData = {
    name: groupName,
    medicines: [
      { name: 'Augmentin 625 Duo Tablet', count: 22 },
      { name: 'Azithral 500 Tablet', count: 8 },
    ],
  };

  const handleRemoveMedicine = (medicineName) => {
    // Add logic to remove medicine from group
    alert(`Remove ${medicineName} from ${groupName}`);
  };

  const handleDeleteGroup = () => {
    // Add logic to delete group
    alert(`Delete group ${groupName}`);
  };

  const handleAddMedicine = () => {
    // Logic to add medicine to the group
    if (medicineName && medicineCount) {
      alert(`Added ${medicineName} with count ${medicineCount} to ${groupName}`);
      // Reset fields after adding
      setMedicineName('');
      setMedicineCount('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="group-detail">
      <div className="header">
        <h2>
          Inventory › Medicine Groups › {groupData.name} ({groupData.medicines.length})
        </h2>
        <p>Detailed view of a medicine group.</p>
      </div>
      <input type="text" className="search-input" placeholder="Search for Medicine..." />
      <button className="add-medicine-button" onClick={() => setIsModalOpen(true)}>
        + Add Medicine
      </button>

      <table className="medicine-group-table">
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>No of Medicines</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {groupData.medicines.map((medicine, index) => (
            <tr key={index}>
              <td>{medicine.name}</td>
              <td>{medicine.count < 10 ? `0${medicine.count}` : medicine.count}</td>
              <td>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveMedicine(medicine.name)}
                >
                  Remove from Group
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="delete-group-button" onClick={handleDeleteGroup}>
        Delete Group
      </button>

      {/* Modal for Adding Medicine */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <h3>Add Medicine</h3>
            <div className="modal-input-group">
              <label>Medicine</label>
              <input
                type="text"
                placeholder="Enter Medicine Name or Medicine ID"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
              />
            </div>
            <div className="modal-input-group">
              <label>Number of Medicines</label>
              <input
                type="number"
                placeholder="Enter the quantity of medicine"
                value={medicineCount}
                onChange={(e) => setMedicineCount(e.target.value)}
              />
            </div>
            <button className="add-medicine-to-group-button" onClick={handleAddMedicine}>
              + Add Medicine to Group
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupDetailsView;
