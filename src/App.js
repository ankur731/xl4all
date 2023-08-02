import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import SignIn from './components/Auth/Login/Login';
import SignUp from './components/Auth/Signup/Logout';
import Forgot from './components/Auth/Forgot/Forgot';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Template from './components/Template';
import TherepistDashboard from './pages/Therepist/Dashboard';
import PatientDashboard from './pages/Patient/Dashboard';
import TherepistAppointment from './pages/Therepist/Appointment';
import TherepistCalender from './pages/Therepist/Calender';
import Therepistdetail from './pages/Therepist/TherepistDetail';
import Patientdetail from './pages/Patient/PatientDetail';
import Patients from './pages/Therepist/Patients';
import Therepists from './pages/Patient/Therepists';
import PatientCalender from './pages/Patient/PatientCalender';
import Enquiry from './pages/Therepist/Enquiry';
import AdminDashboard from './pages/Admin/Dashboard';
import Progress from './pages/Patient/Progress';
import TherepistProfile from './pages/Therepist/Profile';
import PatientProfile from './pages/Patient/PatientProfile';
import AdminProfile from './pages/Admin/Profile';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/forgot" element={<Forgot />}/>
        <Route path="/therepist" element={<Template  pov="therepist" page={<TherepistDashboard/>}/>} />
        <Route path="/therepist/patients" element={<Template  pov="therepist"  page={<Patients />}/>} />
        <Route path="/therepist/patient/patient-detail" element={<Template pov="therepist" page={<Patientdetail />}/>} />
        <Route path="/therepist/calender" element={<Template  pov="therepist" page={<TherepistCalender />}/>} />
        <Route path="/therepist/appointment" element={<Template pov="therepist" page={<TherepistAppointment />}/>} />
        <Route path="/therepist/enquiry" element={<Template pov="therepist" page={<Enquiry />}/>} />
        <Route path="/therepist/profile" element={<Template pov="therepist" page={<TherepistProfile />}/>} />


        <Route path="/patient" element={<Template pov="patient" page={<PatientDashboard/>} />}/>
        <Route path="/patient/therepist/therepist-detail" element={<Template pov="patient" page={<Therepistdetail />}/>} />
        <Route path="/patient/therepists" element={<Template pov="patient" page={<Therepists />}/>} />
        <Route path="/patient/calender" element={<Template pov="patient" page={<PatientCalender />}/>} />
        <Route path="/patient/progress" element={<Template pov="patient" page={<Progress />}/>} />
        <Route path="/patient/profile" element={<Template pov="patient" page={<PatientProfile />}/>} />

        <Route path="/admin" element={<Template pov="admin" page={<AdminDashboard />} />}/>
        <Route path="/admin/therepists" element={<Template pov="admin" page={<Therepists admin="true"/>}/>} />
        <Route path="/admin/therepist/therepist-detail" element={<Template pov="admin" page={<Therepistdetail admin="true"/>}/>} />
        <Route path="/admin/patients" element={<Template  pov="admin"  page={<Patients admin="true"/>}/>} />
        <Route path="/admin/patient/patient-detail" element={<Template pov="admin" page={<Patientdetail admin="true"/>}/>} />
        <Route path="/admin/enquiry" element={<Template pov="admin" page={<Enquiry pov="admin"/>}/>} />
        <Route path="/admin/profile" element={<Template pov="admin" page={<AdminProfile />}/>} />

      </Routes>
      </Router>
       <ToastContainer />
    </div>
  );
}

export default App;
