import React from 'react';
import { Link } from 'react-router-dom';
import './TechPage.css';

const TechPage = () => {
  return (
    <div className="tech-page">
      <header className="header">🚗 Техника на сервере</header>

      <main className="main-content">
        <h2>⚖️ Правила использования транспорта</h2>
        <div className="tech-info">
          <p>Некоторые виды транспорта <span className="prohibited">запрещены</span> на сервере:</p>
          <ul className="prohibited-list">
            <li>🚀 РСЗО</li>
            <li>🚁 Боевые вертолёты</li>
            <li>🤖 МЕХ</li>
            <li>🛡️ Танки</li>
            <li>🏍️ Летающие мотоциклы</li>
            <li>🚙 Кастомные машины с турелями</li>
            <li>🚙 Кабина от авто "Быстрее ветра"</li>
            <li>⚙️ Зенитка</li>
          </ul>
          <p className="allowed">✅ Все остальные машины, которые не входят в эту категорию, допускаются.</p>
        </div>

        <div className="transport-rules">
          <h3>🚦 На территории РТ:</h3>
          <ul>
            <li>✅ Разрешено использовать технику, если в этот момент нет ДРОПА.</li>
            <li>❌ Во время ДРОПА или ТАНКА: использование автомобиля или мотоцикла <span className="prohibited">запрещено</span>.</li>
            <li>✅ Разрешены только: <span className="allowed">планер, велосипед, Эфес</span>.</li>
          </ul>
        </div>

        <h3>🚫 Дополнительные запреты:</h3>
        <ul className="additional-rules">
          <li>❌ Запрещено прятать авто с лутом под водой.</li>
          <li>❌ Запрещено оставлять авто в недоступных местах на суше.</li>
          <li>❌ Запрещено оставлять транспорт для сейва лута.</li>
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

export default TechPage;



