import React from "react";
import styled from "styled-components";
let DateIntervals = styled.p``;

function About() {
  return (
    <article>
      <h1>Александр Вшивцев</h1>
      <p>Пафос, Кипр</p>
      <p>
        Почта:&nbsp;
        <a href={"mailto:vshivcev.alexandr@gmail.com"}>
          vshivcev.alexandr@gmail.com
        </a>
      </p>
      <p>
        Телефон:&nbsp;
        <a href="tel:+35794425213">+35794425213</a>
      </p>
      <p>
        <a href={"https://t.me/grengo94"}>Telegram</a>&nbsp;|&nbsp;
        <a href={"https://wa.me/79817091960"}>WhatsApp</a>
      </p>
      <p>
        Начинающий frontend разработчик в поиске позиции, на которой смогу
        продолжить свое развитие как специалиста. Стремлюсь всегда доводить дело
        до конца, хорошо работаю как в команде, так и самостоятельно. В данный
        момент изучаю TypeScript, далее планирую погружаться в backend.
      </p>
    </article>
  );
}
function Educational() {
  return (
    <>
      <h2>ОБРАЗОВАНИЕ</h2>
      <ul>
        <li>
          <DateIntervals>Апрель - сентябрь 2022</DateIntervals>
          <div>
            Программа “Профессия frontend разработчик”, HTML Academy За 6
            месяцев успешно выполнил три учебных проекта:
            <ul>
              <li>
                Шаблон для интернет-магазина с использованием базового HTML и
                CSS.
              </li>
              <li>
                Сайт-визитка туристического города где применил сборщик
                WebPack/GULP, препроцессор SASS/LESS, адаптивную верстку.
              </li>
              <li>
                Сайт-клон соцсети с функциональностью загрузки API, обработки
                изображений посредством JS.
              </li>
            </ul>
          </div>
        </li>
        <li>
          2012 - 2015
          <p>
            Кафедра кораблестроения, CПбГМТУ Изучал дисциплины в сфере
            инженерного дела, технологии кораблестроения.
          </p>
        </li>
      </ul>
    </>
  );
}
function Experience() {
  return (
    <>
      <h2>Опыт работы</h2>
      <ul>
        <li>
          <p>Октябрь 2022 — Февраль 2023</p>
          <p>
            Intern Frontend Developer
            <br />
            Hawking Bros
          </p>
          <p>
            Совершенствовал полученные навыки в HTML, SCSS, JS.
            <br />
            В команде под руководством наставников осваивал и использовал на
            практике технологии: React Hooks/Routing/Context/Redux.
            <br />
            Ознакомился с технологиями: Unit-тестирование, Next.js, статическая
            типизация, PropTypes.
            <br />
          </p>
        </li>
        <li>
          <p>Декабрь 2015 - Ноябрь 2021</p>
          <p>
            Начальник водолазной станции/водолаз
            <br />
            Служба поисковых и аварийно-спасательных работ
          </p>
          <p>
            Руководил группой из 8 человек, принимал участие и командовал
            водолазными спусками в различных гидрометеорологических условиях.
            Поддерживал продуктивную атмосферу в команде с людьми с разными
            бекграундами. Научился сохранять спокойствие в любой ситуации и
            работать в условиях повышенной опасности, а также работать с людьми
            в состоянии стресса.
          </p>
        </li>
      </ul>
    </>
  );
}
function Skills() {
  return (
    <>
      <h2>Навыки</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>HTML, CSS(LESS, SASS), StyledComponent</li>
        <li>Адаптивная и семантическая верстка по БЭМ</li>
        <li>GULP, WebPack</li>
        <li>Figma</li>
        <li>Git, GitHub</li>
      </ul>
    </>
  );
}

export default function CvRu() {
  return (
    <>
      <About />
      <article>
        <Educational />
        <Experience />
        <Skills />
      </article>
    </>
  );
}
