import React from 'react';
import { Link } from 'react-router-dom';
import './RulesPage.css';

const RulesPage = () => {
  return (
    <div className="rules-page">
      <header className="header">📜 Правила сервера</header>

      <main className="main-content">
        <h2>⚖️ Серверные правила</h2>
        <ul className="rules-list">
          <li>🚗 Запрещён транспорт: РСЗО, боевые вертолёты, МЕХ, танки, летающие мотоциклы, кастомные машины с турелями, зенитка. Шипы на авто разрешены.</li>
          <li>🚗 Запрещена кабина от "Быстрее ветра".</li>
          <li>🔫 Запрещённое оружие: Эм-винтовки, 4-зарядная РПГ, граники, NTW.</li>
          <li>🏠 Обычная РПГ разрешена только во время рейда или анти-рейда после разрушения основной постройки (дверь, стена, потолок и т. д.).</li>
          <li>🚧 Тройные и другие стенки запрещены, максимум 2 потолка в бункере. Багаюз запрещен.</li>
          <li>🎣 Запрещено устанавливать рыболовные сети, пока не пройдет 12 часов с момента запуска сервера.</li>
          <li>🚗 Запрещено использовать технику во время ДРОПА и сбивания Танка на РТ, за исключением велосипеда, планера и Эфеса. Данное правило **не распространяется на МЕДАЛЬНЫЙ ДРОП**.</li>
          <li>🏆 Чтобы узнать подробнее о медальном дропе, изучите раздел <Link to="/medal" className="highlight-link">Медальный Дроп</Link>.</li>
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

export default RulesPage;


