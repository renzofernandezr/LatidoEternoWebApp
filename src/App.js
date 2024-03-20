import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Updated import
import ProfilePageV2 from './ProfilePageV2';
import DashBoard from './Dashboard';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/Perfil/:uid" element={<ProfilePageV2 />} /> {/* Updated route */}
        <Route path='/DashBoard' element={<DashBoard/>} />
      </Routes>
    </Router>
  );
}

export default App;