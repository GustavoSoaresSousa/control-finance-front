import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Management } from './pages/Management';
import { NewRegisterPage } from './pages/NewRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/registers' element={<Management />} />
        <Route path='/newRegister' element={<NewRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;