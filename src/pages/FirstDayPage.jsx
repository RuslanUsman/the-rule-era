import React from 'react';
import { Link } from 'react-router-dom';
import './FirstDayPage.css';

const FirstDayPage = () => {
  return (
    <div className="first-day-page">
      <header className="header">⚠️ Запрещено первый день вайпа</header>

      <main className="main-content">
        <h2>🚫 Список запретов</h2>
        <ul className="first-day-rules-list">
          <li><strong>🎣 1)</strong> Установка рыболовных сетей для ловли рыбы. Должно пройти **12 часов** с момента запуска сервера.</li>
          <li><strong>🛍️ 2)</strong> В магазине Телеграм **нет в продаже** первый день вайпа: мвк броня, титан броня, Энерго броня, топ оружие, Титан печь, Реакторы, Тэсла, пауки, С4, ракеты, Гексоген.</li>
         
          <li><strong>💣 3)</strong> Запрещено **использование взрывчатки** (С4, ракеты, Гексоген) на первых **12 часов** после вайпа.</li>
          
        </ul>

        <p className="notice">⚠️ Незнание правил не освобождает вас от ответственности!</p>
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

export default FirstDayPage;


