import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Updated import
import ProfilePageV2 from './ProfilePageV2';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Perfil/:uid" element={<ProfilePageV2 />} /> {/* Updated route */}
      </Routes>
    </Router>
  );
}

export default App;