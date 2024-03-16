import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Perfil from './Perfil'; // Updated import
import ProfilePageV2 from './ProfilePageV2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePageV2 />} />
        <Route path="/Perfil/:uid" element={<Perfil />} /> {/* Updated route */}
      </Routes>
    </Router>
  );
}

export default App;
