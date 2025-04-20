import React from 'react';
import { Link } from 'react-router-dom';
import './WarningPage.css';

const WarningPage = () => {
  return (
    <div className="warning-page">
      <header className="header">За что могут дать предупреждение</header>
      <main className="main-content">
        <h2>Причины предупреждений</h2>
        <ul className="warning-rules-list">
          <li><strong>1)</strong> Запрещено передача лута, домов другим игрокам.</li>
          <li><strong>2)</strong> Смена тимейта без согласия Администрации.</li>
          <li><strong>3)</strong> Использование любого вида транспорта на ДРОПЕ (кроме велосипедов и планера).</li>
          <li><strong>4)</strong> Использование твинков для установки дополнительных сетей или использование сетей в первые 12 часов вайпа. 
            <ul>
              <li>Первое нарушение — предупреждение.</li>
              <li>Повторное нарушение — бан.</li>
            </ul>
          </li>
          <li><strong>5)</strong> Рейд ивент бот баз.</li>
        </ul>
        <p className="notice">Незнание правил не освобождает вас от ответственности!</p>
        <Link to="/" className="menu-button">Главное меню</Link>
      </main>
      <footer className="footer">
    <span class="footer-text">Наш телеграм канал</span>
    <a href="https://t.me/eraSurvival" target="_blank" rel="noopener noreferrer">
        <img src="./images/telegram-icon.png" alt="Telegram Icon" class="footer-icon" />
    </a>
</footer>

    </div>
  );
};

export default WarningPage;
