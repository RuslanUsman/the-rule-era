import React from 'react';
import { Link } from 'react-router-dom';
import './Weapons.css';

const Weapons = () => {
  return (
    <div className="warning-page">
      <header className="header">🔫 Оружие на сервере</header>

      <main className="main-content">
        <h2>🚫 Запрещенное оружие</h2>
        <ul className="banned-weapons-list">
          <li>🔫 Эм винтовки</li>
          <li>💣 4-зарядная РПГ</li>
          <li>🎯 Граник</li>
          <li>🔭 NTW-винтовка</li>
        </ul>

        <h2>✅ Разрешенное оружие</h2>
        <p>На сервере разрешены все остальные виды оружия, за исключением РПГ.</p>
        <p>Обычное РПГ запрещено во время PvP.</p>
        <p>Использование РПГ разрешено только во время рейда или антирейда после разрушения основной постройки (дверь, стена, потолок и т. д.).</p>

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

export default Weapons;

