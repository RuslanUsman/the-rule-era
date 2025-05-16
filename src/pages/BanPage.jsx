import React from 'react';
import { Link } from 'react-router-dom';
import './BanPage.css';

const banRules = [
  { id: 1, text: "🚫 Запрещенное оружие: Эм-винтовки, 4-зарядная РПГ, граники, NTW.", highlight: "Оружие", prohibited: "Использование запрещено на сервере" },
  { id: 2, text: "⚠️ Сервер Соло: Любая команда из 1+ игроков — бан всех участников без предупреждения." },
  { id: 3, text: "🛑 Запрещено обсуждение политики и религии. Оскорбления игроков или администрации — предупреждение/бан." },
  { id: 4, text: "❌ Запрещено прятать лут в воде или под текстурами — бан без предупреждения." },
  { id: 5, text: "⏳ Запрещено заходить на сервер после 24 часов по счётчику." },
  { id: 6, text: "✅ Вход на сервер разрешён только при наличии 6+ игровых часов или доната от 3$." },
  { id: 7, text: "🚷 Запрещено использование игровых имён, содержащих пропаганду насилия, нацизма, оскорбления религии, национальности, чести и достоинства других игроков.", highlight: "Игровые имена", prohibited: "Нарушение приведёт к бану без предупреждения" },
  { id: 8, text: "🏆 Медальный дроп: После выпадения ДРОПА транспорт запрещен по всей карте, кроме  планера и эфеса, до момента внесения медали в шкаф основы. Медаль должна храниться только в основе. Хранение медали в кибе запрещено и приведёт к бану без предупреждения.", highlight: "Медальный дроп", prohibited: "Соблюдение правила обязательно!" }
];

const BanPage = () => {
  return (
    <div className="ban-page">
      <header className="header">🚫 Правила сервера: За что могут забанить</header>

      <main className="main-content">
        <h2>📜 Основные причины блокировки</h2>
        <ul className="ban-rules-list">
          {banRules.map(({ id, text, highlight, prohibited }) => (
            <li key={id}>
              {highlight && <strong className="rule-highlight">{highlight}: </strong>}
              <span className="rule-text">{text}</span>
              {prohibited && <span className="rule-prohibited"> ({prohibited})</span>}
            </li>
          ))}
        </ul>

        <p className="notice">⚠️ Незнание правил не освобождает вас от ответственности!</p>
        <Link to="/" className="menu-button">🏠 Вернуться в главное меню</Link>
      </main>

      <footer className="footer">
        <span className="footer-text">🔗 Наш Telegram-канал</span>
        <a href="https://t.me/eraSurvival" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/images/telegram-icon.png`} alt="Telegram Icon" className="footer-icon" />
        </a>
      </footer>
    </div>
  );
};

export default BanPage;


