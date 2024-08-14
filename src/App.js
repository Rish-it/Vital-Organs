import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login_signup from './components/Login/Login_sigup';
import Landing_page from './components/Login/Landing_page';
import Hospital_login from './components/Login/Hospital_login';
import Needy_signup from './components/Login/Needy_signup';
import Home from './components/Home';
import Donor_login from './components/Login/Donor_login';
import ApproveDonor from './components/Hospital/Approve_donor';
import Hospital_nav from './components/Hospital/Hospital_nav';
import Main_page from './components/Hospital/Main';
import PatientRecord from './components/Hospital/Patient_list';
import RegisterRecipient from './components/Hospital/Register_recipient';
import HospitalList from './components/donor_dashboard/Hospital_list';
import TransplantMatch from './components/Hospital/transplant-match';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Landing_page />} />
        <Route exact path="/Donor_Register" element={<Login_signup />} />
        <Route exact path="/Needy_signup" element={<Needy_signup />} />
        <Route exact path="/Hospital_login" element={<Hospital_login />} />
        <Route exact path="/Donor_login" element={<Donor_login />} />
        <Route exact path="/Main_page" element={window.localStorage.getItem("isAuthenticated") ? <Main_page /> : <Navigate to="/Hospital_login" />} />
        <Route exact path="/Approve_donor" element={window.localStorage.getItem("isAuthenticated") ? <ApproveDonor /> : <Navigate to="/Hospital_login" />} />
        <Route exact path="/Patient_list" element={window.localStorage.getItem("isAuthenticated") ? <PatientRecord /> : <Navigate to="/Hospital_login" />} />
        <Route exact path="/RegisterRecipient" element={window.localStorage.getItem("isAuthenticated") ? <RegisterRecipient /> : <Navigate to="/Hospital_login" />} />
        <Route exact path="/Transplant_match" element={window.localStorage.getItem("isAuthenticated") ? <TransplantMatch /> : <Navigate to="/Hospital_login" />} />

        <Route exact path="/Hospital_list" element={<HospitalList />} />


      </Routes>
    </>
  );
}

export default App;
