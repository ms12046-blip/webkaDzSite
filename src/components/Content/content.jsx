import React from "react";
import "./content.css";

const Content = () => {
  return (
    <main className="content">
      <section className="content__section" id="basics">
        <h1 className="content__title">Основы первой помощи</h1>
        <p className="content__text">
          Первая помощь - это простые действия, которые помогают человеку до приезда врачей. 
          Главное, оставаться спокойным и действовать по шагам.
        </p>
        <p className="content__text">
          Не нужно быть врачом, чтобы помочь. Важно только знать основные правила и действовать аккуратно. 
          Даже небольшая помощь может спасти жизнь.
        </p>
        <p className="content__text">
          Самое главное, не паниковать. Оцените ситуацию, убедитесь, что вокруг безопасно, и начинайте действовать.
        </p>
      </section>

      <section className="content__section" id="steps">
        <h2 className="content__subtitle">Алгоритм первой помощи</h2>
        <p className="content__text">
          Следуя этим шагам, вы сможете быстро и правильно оценить состояние пострадавшего и помочь ему до приезда скорой помощи.
        </p>

        <ol className="content__list">
          <li className="content__item">1. Убедитесь, что место безопасно.</li>
          <li className="content__item">2. Проверьте, реагирует ли человек.</li>
          <li className="content__item">3. Проверьте, дышит ли он.</li>
          <li className="content__item">4. Позвоните 103 или 112.</li>
          <li className="content__item">5. Если нет дыхания - начните СЛР.</li>
          <li className="content__item">6. Оставайтесь рядом до приезда врачей.</li>
        </ol>

        <p className="content__text">
          Помните: важно действовать быстро, но осторожно. Ваша помощь может быть решающей до приезда специалистов.
        </p>
      </section>

      <section className="content__section content__section--help">
        <h2 className="content__subtitle">Когда нужно действовать быстро?</h2>
        <p className="content__text">
          В некоторых случаях каждая минута на счету. Если вы видите одно из этих состояний, действуйте незамедлительно.
        </p>
        <ul className="content__list">
          <li className="content__item">Нет дыхания</li>
          <li className="content__item">Сильное кровотечение</li>
          <li className="content__item">Человек без сознания</li>
          <li className="content__item">Сильная травма головы или спины</li>
        </ul>
        <p className="content__text">
          Даже если вы сомневаетесь, лучше сразу вызвать скорую помощь. Главное, не оставлять человека одного и следовать простым правилам.
        </p>
      </section>

    </main>
  );
};

export default Content;