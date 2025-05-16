import React from 'react';
import { Link } from 'react-router-dom';
import './WarningPage.css';

const WarningPage = () => {
  return (
    <div className="warning-page">
      <header className="header">⚠️ За что могут дать предупреждение</header>

      <main className="main-content">
        <h2>🚫 Причины предупреждений</h2>
        <ul className="warning-rules-list">
          <li>🎁 Запрещена передача лута и домов другим игрокам.</li>
          <li>💣 Использование РПГ запрещено при ПВП (на усмотрение Администратора).</li>
          <li>🚗 Использование любого вида транспорта(кроме Велосипедов, Планера и Эфеса)  на РТ во время ДРОПА и при сбивания Танка (на усмотрение админов предупреждение или бан).</li>
          <li>🎭 Использование твинков для установки дополнительных сетей или использование сетей в первые 12 часов вайпа.</li>
          <li>🏗️ Использование тройных и других стенок запрещено. Максимум 2 потолка в бункере. Багаюз запрещён.
            <ul>
              <li>🔹 Первое нарушение — предупреждение.</li>
              <li>🔹 Повторное нарушение — бан.</li>
            </ul>
          </li>
          <li>🤖 Рейд ивент бот-баз (использование запрещенных методов).</li>
          <li>🗣️ Оскорбления игроков, администрации или любые токсичные высказывания.</li>
          <li>🔗 Распространение рекламных ссылок или пиар других серверов.</li>
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

export default WarningPage;



