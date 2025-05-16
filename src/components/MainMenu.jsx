import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = useMemo(() => [
    { name: "🔒 За что могут дать бан", path: "/ban" },
    { name: "⚠️ За что могут дать предупреждение", path: "/warning" },
    { name: "🚫 Запрещено первый день вайпа", path: "/first-day" },
    { name: "🔫 Оружия на сервере 💣", path: "/weapons" },
    { name: "🚗 Техника на сервере", path: "/tech" },
    { name: "🏗️ Постройки на сервере", path: "/building" },
    { name: "🎁 РТ и Дроп", path: "/drop" },
    { name: "🏅 Медальный ДРОП", path: "/medal" },
    { name: "📜 Основные правила", path: "/rules" },
    
    { name: "👑 Администраторы сервера", path: "/admins" },
  ], []);

  const handleMouseEnter = useCallback((index) => {
    setActiveItem(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveItem(null);
  }, []);

  const handleButtonClick = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <div className="menu-container">
      <header className="header">🔥 Эпоха выживания</header>

      <nav className="main-menu">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleButtonClick(item.path)}
            className={`menu-button ${activeItem === index ? 'active' : ''}`}
          >
            {item.name}
          </button>
        ))}
      </nav>

      <footer className="footer">
        <span className="footer-text">🐉 Dragon</span>
      </footer>
    </div>
  );
};

export default MainMenu;
