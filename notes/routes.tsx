import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import UsersDetails from './components/UsersDetails';
import ConditionalRendering from './components/ConditionalRendering';
function App() {
  return (
    <div>
      <ConditionalRendering/>
      <Routes>
        {' '}
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userid" element={<UsersDetails />} />
      </Routes>
    </div>
  );
}

export default App;
