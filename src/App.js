import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import CompetitionsPage from './pages/CompetitionsPage';
import SportsmenPage from './pages/SportsmenPage';
import RegistrationPage from './pages/RegistrationPage';
import CompetitionForm from './pages/CompetitionForm';
import SportsmanForm from './pages/SportsmanForm';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/competitions" />} />
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/competitions/new" element={<CompetitionForm />} />
            <Route path="/competitions/edit/:id" element={<CompetitionForm />} />
            <Route path="/sportsmen" element={<SportsmenPage />} />
            <Route path="/sportsmen/new" element={<SportsmanForm />} />
            <Route path="/sportsmen/edit/:id" element={<SportsmanForm />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
