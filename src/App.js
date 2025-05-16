import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import RulesPage from './pages/RulesPage';
import BanPage from './pages/BanPage';
import WarningPage from './pages/WarningPage';
import FirstDayPage from './pages/FirstDayPage';
import TechPage from './pages/TechPage';
import BuildingPage from './pages/BuildingPage';
import AdminsPage from './pages/AdminsPage';
import Weapons from './pages/Weapons';
import Drop from "./pages/Drop";
import Medal from "./pages/Medal";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || ''}>
      <Routes>
        {/* Главное меню */}
        <Route path="/" element={<MainMenu />} />

        {/* Страницы */}
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/ban" element={<BanPage />} />
        <Route path="/warning" element={<WarningPage />} />
        <Route path="/first-day" element={<FirstDayPage />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/building" element={<BuildingPage />} />
        <Route path="/admins" element={<AdminsPage />} />
        <Route path="/weapons" element={<Weapons/>} />
        <Route path="/drop" element={<Drop/>} />
        <Route path="/medal" element={<Medal/>} />
      </Routes>
    </Router>
  );
}

export default App;