


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';




const MainMenu = () => {
  const menuItems = [
    { name: "За что могут дать предупреждение", path: "/warning" },
    { name: "Запрещено первый день вайпа", path: "/first-day" },
    { name: "За что могут дать бан", path: "/ban" },
    { name: "Правила", path: "/rules" },
    { name: "Техника", path: "/tech" },
    { name: "Постройка", path: "/building" },
    { name: "Администраторы сервера", path: "/admins" },
  ];

  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <header className="header">Эпоха выживания</header>
      <div className="main-menu">
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
      </div>
      <footer className="footer">
  <span className="footer-text">Наш телеграм канал</span>
  <a href="https://t.me/eraSurvival" target="_blank" rel="noopener noreferrer">
  <img src="./images/telegram-icon.png" alt="Telegram Icon" class="footer-icon" />
  </a>
</footer>




    </div>
  );
};

export default MainMenu;

