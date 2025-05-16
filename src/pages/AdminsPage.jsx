import React from 'react';
import { Link } from 'react-router-dom';
import './AdminsPage.css';
import '../style.css';

const admins = [
  {
    name: "👑 Основатель Проекта",
    image: `${process.env.PUBLIC_URL}/images/dragon.jpg`,
    telegramLink: "https://t.me/Dragon010101",
    username: "Dragon"
  },
  {
    name: "🛡️ Администратор 1",
    image: `${process.env.PUBLIC_URL}/images/funtik.jpg`,
    telegramLink: "https://web.telegram.org/a/#6008153078",
    username: "中丫廾丁仈长"
  },
  {
    name: "🛡️ Администратор 2",
    image: `${process.env.PUBLIC_URL}/images/alex.jpg`,
    telegramLink: "https://web.telegram.org/a/#389746882",
    username: "Alex"
  }
];

const AdminCard = ({ name, image, telegramLink, username }) => (
  <div className="admin-card">
    <img src={image} alt={name} className="admin-image" />
    <h3 className="admin-name">{name}</h3>
    <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="telegram-button">
      <img src={`${process.env.PUBLIC_URL}/images/telegram-icon.png`} alt="Telegram" className="telegram-icon" />
      {username}
    </a>
  </div>
);

const AdminsPage = () => {
  return (
    <div className="admins-page">
      <header className="header">🔹 Администраторы сервера</header>

      <main className="main-content">
        <h2>👥 Наша команда</h2>
        <div className="admins-container">
          {admins.map((admin, index) => (
            <AdminCard key={index} {...admin} />
          ))}
        </div>
        <Link to="/" className="menu-button">🏠 Главное меню</Link>
      </main>

      <footer className="footer">
        <span className="footer-text">🔗 Наш телеграм канал</span>
        <a href="https://t.me/eraSurvival" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/images/telegram-icon.png`} alt="Telegram Icon" className="footer-icon" />
        </a>
      </footer>
    </div>
  );
};

export default AdminsPage;

