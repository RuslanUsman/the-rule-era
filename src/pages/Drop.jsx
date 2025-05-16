import React from 'react';
import { Link } from 'react-router-dom';
import './Drop.css';

const Drop = () => {
  return (
    <div className="warning-page">
      <header className="header">⚠️ Правила использования техники на РТ и ДРОП</header>

      <main className="main-content">
        <h2>🚫 Запреты на транспорт</h2>
        <p>На территории РТ и во время ДРОПА запрещено использовать технику, кроме велосипеда, планера и эфеса.</p>
        <p>Также запрещено применять технику при сбивании танка.</p>

        <h2>✅ Разрешенное использование</h2>
        <p>Если на РТ нет ДРОПА или танка, технику можно использовать, если она не нарушает правила сервера.</p>

        <p className="notice">⚠️ Незнание правил не освобождает вас от ответственности!</p>
        <Link to="/" className="menu-button">🏠 Главное меню</Link>
      </main>

      <footer className="footer">
        <span className="footer-text">🔗 Наш телеграм-канал</span>
        <a href="https://t.me/eraSurvival" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/images/telegram-icon.png`} alt="Telegram Icon" className="footer-icon" />
        </a>
      </footer>
    </div>
  );
};

export default Drop;
