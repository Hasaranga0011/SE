import express from 'express';
import con from '../utils/db.js'; // Ensure your DB connection is correctly set up here.
import jwt from 'jsonwebtoken';

const router = express.Router();

// Login route
router.post('/login', (req, res) => {
    const { email, password, role } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ? AND role = ?";
    con.query(sql, [email, password, role], (err, result) => {
        if (err) {
            return res.json({ loginStatus: false, Error: "Query error" });
        }
        if (result.length > 0) {
            const email = result[0].email;
            const userRole = result[0].role;
            const token = jwt.sign({ role: userRole, email: email }, "jwt_secret_Key", { expiresIn: '1d' });
            res.cookie('token', token, { httpOnly: true });
            return res.json({ loginStatus: true, role: userRole });
        } else {
            return res.json({ loginStatus: false, Error: "Wrong email, password, or role" });
        }
    });
});

// Route to handle adding a new medicine
router.post('/addMedicine', (req, res) => {
    const { medicineName, medicineID, medicineGroup, quantity, price, expireDate, supplierName, howToUse, sideEffects } = req.body;

    const sql = "INSERT INTO medicines (medicineName, medicineID, medicineGroup, quantity, price, expireDate, supplierName, howToUse, sideEffects) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    con.query(sql, [medicineName, medicineID, medicineGroup, quantity, price, expireDate, supplierName, howToUse, sideEffects], (err, result) => {
        if (err) {
            console.error("Error inserting data into the database:", err);
            return res.json({ status: false, message: "Database error" });
        }
        return res.json({ status: true, message: "Medicine added successfully" });
    });
});

// Route to fetch all medicines
router.get('/medlist', (req, res) => {
    const sql = 'SELECT * FROM medicines';
    con.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching medicines from the database:", err);
            return res.json({ status: false, message: "Database error" });
        }
        res.json(results);
    });
});

// Route to update medicine details
router.post('/updateMedicine', (req, res) => {
    const { medicineName, medicineID, medicineGroup, quantity, price, expireDate, supplierName, howToUse, sideEffects } = req.body;

    const sql = "UPDATE medicines SET medicineName = ?, medicineGroup = ?, quantity = ?, price = ?, expireDate = ?, supplierName = ?, howToUse = ?, sideEffects = ? WHERE medicineID = ?";
    con.query(sql, [medicineName, medicineGroup, quantity, price, expireDate, supplierName, howToUse, sideEffects, medicineID], (err, result) => {
        if (err) {
            console.error("Error updating data in the database:", err);
            return res.json({ status: false, message: "Database error" });
        }
        return res.json({ status: true, message: "Medicine updated successfully" });
    });
});

// Route to delete a medicine by ID
router.delete('/DeleteMedicine/:medicineID', (req, res) => {
    const { medicineID } = req.params;

    const sql = "DELETE FROM medicines WHERE medicineID = ?";
    con.query(sql, [medicineID], (err, result) => {
        if (err) {
            console.error("Error deleting medicine from the database:", err);
            return res.json({ status: false, message: "Database error" });
        }
        return res.json({ status: true, message: "Medicine deleted successfully" });
    });
});

// Route to count the total number of medicines
router.get('/medicines/count', (req, res) => {
    const sql = 'SELECT COUNT(*) AS totalMedicines FROM medicines';
    con.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching medicines count from the database:", err);
            return res.json({ status: false, message: "Database error" });
        }
        res.json({ status: true, totalMedicines: results[0].totalMedicines });
    });
});

// Route to fetch medicines expiring within 3 months
router.get('/medicines/expiring-soon', (req, res) => {
    const sql = "SELECT * FROM medicines WHERE expireDate <= DATE_ADD(NOW(), INTERVAL 3 MONTH) ORDER BY expireDate ASC";
    con.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching expiring medicines from the database:", err);
            return res.json({ status: false, message: "Database error" });
        }
        res.json({ status: true, expiringMedicines: results });
    });
});

// Route to add a new supplier
router.post('/addSupplier/:supplierID', (req, res) => {
    const { supplierName, contactNumber, email } = req.body;
    const sql = "INSERT INTO suppliers (supplierName, contactNumber, email) VALUES (?, ?, ?)";
    con.query(sql, [supplierName, contactNumber, email], (err, result) => {
        if (err) {
            console.error("Error adding supplier:", err);
            return res.status(500).json({ status: false, message: "Database error" });
        }
        return res.json({ status: true, message: "Supplier added successfully" });
    });
});
  

// Update supplier details
router.put('/updateSupplier/:supplierID', (req, res) => {
    const { supplierID } = req.params;
    const { supplierName, contactNumber, email } = req.body;
    const sql = "UPDATE suppliers SET supplierName = ?, contactNumber = ?, email = ? WHERE supplierID = ?";
    con.query(sql, [supplierName, contactNumber, email, supplierID], (err, result) => {
        if (err) {
            console.error("Error updating supplier:", err);
            return res.status(500).json({ status: false, message: "Database error" });
        }
        return res.json({ status: true, message: "Supplier updated successfully" });
    });
});

// Delete supplier
router.delete('/deleteSupplier/:supplierID', (req, res) => {
    const { supplierID } = req.params;
    const sql = "DELETE FROM suppliers WHERE supplierID = ?";
    con.query(sql, [supplierID], (err, result) => {
        if (err) {
            console.error("Error deleting supplier:", err);
            return res.status(500).json({ status: false, message: "Database error" });
        }
        return res.json({ status: true, message: "Supplier deleted successfully" });
    });
});

// Fetch all suppliers
router.get('/suppliers', (req, res) => {
    const sql = "SELECT * FROM suppliers";
    con.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching suppliers:", err);
            return res.status(500).json({ status: false, message: "Database error" });
        }
        res.json({ status: true, suppliers: results });
    });
});




export { router as adminRouter };
