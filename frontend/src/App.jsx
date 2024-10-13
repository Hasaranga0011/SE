/*

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import TechnicalHelp from './components/TechnicalHelp';
import Inventory from './components/Inventory';
import MedicineGroup from './components/MedicineGroup';
import MedicineList from './components/MedicineList';
import { Pharmacist } from './components/Pharmacist';
import MedicineGroup from './components/MedicineGroup';




function App() {
  

  return (
 <BrowserRouter>
 <Routes>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path= '/pharmacist' element={<Pharmacist/>}></Route>
  <Route path= 'inventory' element={<Inventory/>}></Route>
  <Route path= 'MedGroup' element={<MedicineGroup/>}></Route>
  <Route path= 'MedList' element={<MedicineList/>}></Route>

 
  <Route path= '/technical' element={<TechnicalHelp/>}></Route>

 </Routes>
  </BrowserRouter>

  );
}

export default App
*/

import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TechnicalHelp from './components/TechnicalHelp';
import Inventory from './components/Inventory';
import MedicineGroup from './components/MedicineGroup';
import MedicineList from './components/MedicineList';
import { Pharmacist } from './components/Pharmacist';
import AddMedicine from './components/AddMedicine';
import AddMedicineGroup from './components/AddMedicineGroup';
import ContactManagement from './components/ContactManagement';
import SupplierDetails from './components/SupplierDetails';
import AddSupplierDetails from './components/AddSupplierDetails';
import GroupDetailsView from './components/GroupDetailsView';
import BillingManagement from './components/BillingManagement'; // Import Billing Management component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/pharmacist' element={<Pharmacist />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/MedGroup' element={<MedicineGroup />} />
        <Route path='/MedList' element={<MedicineList />} />
        <Route path='/technical' element={<TechnicalHelp />} />
        <Route path='/addMedicine' element={<AddMedicine />} />
        <Route path='/add-medicine-group' element={<AddMedicineGroup />} />
        <Route path='/contact' element={<ContactManagement />} />
        <Route path='/supplierDetails' element={<SupplierDetails />} />
        <Route path='/add-supplier' element={<AddSupplierDetails />} />
        <Route path='/group/:groupName' element={<GroupDetailsView />} />
        <Route path='/billing' element={<BillingManagement />} /> {/* Billing Management Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

