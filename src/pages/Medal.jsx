import React from 'react';
import { Link } from 'react-router-dom';
import './Medal.css';

const Medal = () => {
  return (
    <div className="rules-page">
      <header className="header">📜 Медальный дроп: правила и ограничения</header>

      <main className="main-content">
        <h2>⚖️ Правила медального дропа</h2>
        <ul className="rules-list">
          <li>🚫 После выпадения ДРОПА транспорт запрещен по всей карте, кроме планера и эфеса, до момента внесения медали в шкаф основы.</li>
          <li>🏆 Медаль должна храниться исключительно в шкафу основы. Размещение медали в кибе запрещено и приведет к бану без предупреждения.</li>
          <li>🌊 Запрещено отплывать от берега и находиться в ТЗ с медалью.</li>
        </ul>

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

export default Medal;
