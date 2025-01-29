import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServicePage from './pages/ServicePage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default App;
