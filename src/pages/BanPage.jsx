import React from 'react';
import { Link } from 'react-router-dom';
import './BanPage.css';

const BanPage = () => {
  return (
    <div className="ban-page">
      <header className="header">За что могут дать бан</header>
      <main className="main-content">
        <h2>Причины бана</h2>
        <ul className="ban-rules-list">
          <li><strong>1)</strong> <span className="highlight">Оружие:</span> Эм-винтовки, 4-зарядная РПГ, граники, NTW. (<span className="prohibited">Запрещено на сервере</span>)</li>
          <li><strong>2)</strong> Использование тройных и других стенок (<span className="prohibited">запрещено</span>). Максимум 2 потолка в бункере. Багаюз <span className="prohibited">запрещён</span>.</li>
          <li><strong>3)</strong> Сервер Соло/Дуо. 2+ игроков в тиме — бан всех игроков без предупреждения.</li>
          <li><strong>4)</strong> На дроп запрещено использовать любой вид транспорта (разрешены велосипед или планер). На РТ авто любого типа разрешены, если в это время нет дропа и если не нарушен первый пункт.</li>
          <li><strong>5)</strong> <span className="highlight">Медальный дроп:</span> Запрещено использовать транспорт на РТ, кроме планера, велосипеда и эфеса.</li>
          <li><strong>6)</strong> Запрещено обсуждение политики и религии. Оскорбления — предупреждение/бан.</li>
          <li><strong>7)</strong> Запрещено прятать лут в недоступных местах (в воде, воздухе, под текстурой, в слиперах). Ресурсы хранятся только в постройках (фундамент со стенами и потолком). Шкафы в кустах <span className="prohibited">запрещены</span>. Нарушение — бан без предупреждения.</li>
          <li><strong>8)</strong> Запрещено заходить на сервер после 48 часов по счётчику.</li>
          <li><strong>9)</strong> Вход на сервер разрешён только при наличии 80+ игровых часов или доната на 3$.</li>
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

export default BanPage;

