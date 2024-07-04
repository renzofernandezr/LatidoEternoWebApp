import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; 
// import ProfilePageV2 from './ProfilePageV2'; // Updated import\
import ProfilePageDemo from './ProfilePageDemo';
import DashBoard from './Dashboard';
import EditMedallon from './EditMedallon';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="/Perfil/:uid" element={<ProfilePageV2 />} /> */}
        <Route path="/Perfil/:uid" element={<ProfilePageDemo />} />
        <Route path='/Dashboard' element={<DashBoard/>} />
        <Route path='/Editar' element={<EditMedallon/>} />

      </Routes>
    </Router>
  );
}

export default App;