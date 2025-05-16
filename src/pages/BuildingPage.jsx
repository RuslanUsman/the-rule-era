import React from 'react';
import { Link } from 'react-router-dom';
import './BuildingPage.css';

const BuildingPage = () => {
  return (
    <div className="building-page">
      <header className="header">🏗️ Постройка</header>

      <main className="main-content">
        <h2>⚒️ Правила постройки</h2>
        <ul className="building-rules-list">
          <li><strong>🚧 1)</strong> Использование тройных и других стенок <span className="prohibited">запрещено</span> на сервере.</li>
          <li><strong>🏠 2)</strong> Максимум <span className="allowed">2 потолка</span> в бункере.</li>
          <li><strong>⚠️ 3)</strong> <span className="prohibited">Багаюз</span> запрещён.</li>
          <li><strong>🔫 4)</strong> Застройка турелей и застройка тэслы <span className="prohibited">запрещена</span>.</li>
          <li><strong>🏅 5)</strong> Медаль должна храниться только в шкафу.</li>
         
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

export default BuildingPage;
