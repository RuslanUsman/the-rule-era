import React from 'react';
import { Link } from 'react-router-dom';
import './FirstDayPage.css';

const FirstDayPage = () => {
  return (
    <div className="first-day-page">
      <header className="header">Запрещено первый день вайпа</header>
      <main className="main-content">
        <h2>Список запретов</h2>
        <ul className="first-day-rules-list">
          <li><strong>1)</strong> Установка рыболовных сетей для ловли рыбы.</li>
          <li><strong>2)</strong> Первый день вайпа в магазине Телеграм нет в продаже: мвк броня, титан броня, Энерго броня, топ оружия, Титан печь, Ракторы, Тэсла, пауки, С4, Ракета, Гексоген.</li>
        </ul>
        <p className="notice">Незнание правил не освобождает вас от ответственности!</p>
        <Link to="/" className="menu-button">Главное меню</Link>
      </main>
      <footer class="footer">
    <span class="footer-text">Наш телеграм канал</span>
    <a href="https://t.me/eraSurvival" target="_blank" rel="noopener noreferrer">
        <img src="./images/telegram-icon.png" alt="Telegram Icon" class="footer-icon" />
    </a>
</footer>

    </div>
  );
};

export default FirstDayPage;

