import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FinanceContextProvider } from './contexts/FinanceContext';
import { Home } from './pages/Home';
import { Management } from './pages/Management';
import { NewRegisterPage } from './pages/NewRegister';
import { Dashboard } from './pages/Dashboard'
import { Details } from './pages/Details';


function App() {
  return (
    <Router>
      <FinanceContextProvider>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/registers' element={<Management />} />
        <Route path='/newRegister' element={<NewRegisterPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/details' element={<Details />} />
      </Routes>
      </FinanceContextProvider> 
    </Router>
  );
}

export default App;