import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Perfil from './Perfil'; // Updated import
import LoginPage from './Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Perfil/:uid" element={<Perfil />} /> {/* Updated route */}
      </Routes>
    </Router>
  );
}

export default App;
