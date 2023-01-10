export default function Sedona () {
  return (
    <>
      <p>sedona</p>
      <div className="page__body">
      <header className="header">
        <nav className="nav">
          <ul className="nav__list nav--opened">
            <li className="nav__item"><a className="nav__link" href="index.html">Главная</a></li>
            <li className="nav__item"><a className="nav__link" href="catalog.html">Фото и видео</a></li>
            <li className="nav__item"><a className="nav__link" href="form.html">Форма Отзыва</a></li>
            <li className="nav__item"><a className="nav__link" href="">HTML ACADEMY</a></li>
          </ul>
          <a className="nav__bottom--close">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.2 2.8L19.4 0L11.1 8.3L2.8 0L0 2.8L8.3 11.1L0 19.4L2.8 22.2L11.1 13.9L19.4 22.2L22.2 19.4L13.9 11.1L22.2 2.8Z"
                fill="white"/>
            </svg>
          </a><a className="header__logo" href="">
          <picture>
            <source media="(min-width: 1200px)" srcSet="img/svg/logotype-desktop.svg"/>
              <img alt=""
                                                                                           src="img/svg/logotype-mobile.svg"/>
          </picture>
        </a><a className="header__bottom--toggle">
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9 0H0V4H22.9V0Z" fill="#81B3D2"/>
            <path d="M22.9 9H0V13H22.9V9Z" fill="#81B3D2"/>
            <path d="M22.9 18H0V22H22.9V18Z" fill="#81B3D2"/>
          </svg>
        </a></nav>
        <div className="intro intro--index"><img className="intro__container" src="img/svg/intro_full.svg" alt=""/></div>
      </header>
      <main className="main"><h1 className="visually-hidden">Sedona - туристический сайт</h1>
        <div className="page-title"><p className="page-title__title">СЕДОНА — небольшой городок в АРИЗОНЕ, зАСЛУЖИвающий
          большего!</p><p className="page-title__text">Рассмотрим 5 причин, по которым Седона круче, чем гранд
          каньон!</p></div>
        <h2 className="visually-hidden">Наши преимушества</h2>
        <section className="city-features">
          <ul className="city-features__list">
            <li className="city-features__item">
              <div className="city-features__item-text city-features__point"><h3
                className="city-features__point-title">НАСТОЯЩИЙ ГОРОДОК</h3><p
                className="city-features__point-number">— №1 —</p><p className="city-features__point-text">СЕДОНА НЕ
                АТТРАКЦИОН ДЛЯ ТУРИСТОВ, ТАМ ТЕЧЕТ СВОЯ ЖИЗНЬ</p></div>
              <picture>
                <source media="(min-width: 1200px)" srcSet="img/jpg/photo-city@1x_d.jpg"/>
                  <source media="(min-width: 768px)" srcSet="img/jpg/photo-city@1x_t.jpg"/><img
                    className="city-features__item-img" alt="" src="img/jpg/photo-city@1x_m.jpg"/>
              </picture>
              <div className="features-advantage">
                <ul className="features-advantage__list">
                  <li className="features-advantage__item">
                    <dt className="features-advantage__title">Жилье</dt>
                    <dd className="features-advantage__text">Рекомендуем пожить в настоящем мотеле, все как в кино!</dd>
                  </li>
                  <li className="features-advantage__item">
                    <dt className="features-advantage__title">ЕДА</dt>
                    <dd className="features-advantage__text">Всегда заказывайте ФИРМЕННЫЙ БУРГЕР, Вы НЕ разочаруетесь!
                    </dd>
                  </li>
                  <li className="features-advantage__item">
                    <dt className="features-advantage__title">СУВЕНИРЫ</dt>
                    <dd className="features-advantage__text">Не только китайского, но и местного производства!</dd>
                  </li>
                </ul>
              </div>
            </li>
            <li className="city-features__item">
              <div className="city-features__item-text city-features__point"><h3
                className="city-features__point-title">ТАМ ЕСТЬ Мост дьявола</h3><p
                className="city-features__point-number">— №2 —</p><p className="city-features__point-text">Да, по нему
                можно пройти! Если вы осмелитесь, конечно</p></div>
              <picture className="city-features__item-img">
                <source media="(min-width: 1200px)" srcSet="img/jpg/photo-bridge@1x_d.jpg"/>
                  <source media="(min-width: 768px)" srcSet="img/jpg/photo-bridge@1x_t.jpg"/><img
                    className="city-features__item-img" alt="" src="img/jpg/photo-bridge@1x_m.jpg"/>
              </picture>
            </li>
            <li className="city-features__item">
              <div className="city-features__item-text city-features__point"><h3
                className="city-features__point-title">НЕБОЛЬШАЯ ПЛОЩАДь</h3><p
                className="city-features__point-number">— №3 —</p><p className="city-features__point-text">ВСЕ
                интересные места находятся очень близко</p></div>
            </li>
            <li className="city-features__item">
              <div className="city-features__item-text city-features__point"><h3
                className="city-features__point-title">КРАСИВАЯ ДОРОГА</h3><p className="city-features__point-number">—
                №4 —</p><p className="city-features__point-text">ЕХАТЬ В СЕДОНУ ИЗ ЛАС-ВЕГАСА совсем НЕ СКУЧНО!</p>
              </div>
            </li>
            <li className="city-features__item">
              <div className="city-features__item-text city-features__point"><h3
                className="city-features__point-title">МАЛО ТУРИСТОВ</h3><p className="city-features__point-number">— №5
                —</p><p className="city-features__point-text">Большинство едет в гранд каньони толпится там</p></div>
            </li>
          </ul>
        </section>
        <section className="page-title page-title--search"><p
          className="page-title__title page-title__title--search">ЗАИНТЕРЕСОВАЛИСЬ?</p><p
          className="page-title__text--search">Укажите предполагаемые даты поездки, и мы покажем вам лучшие предложения
          гостиниц в седоне</p>
          <div className="page-title__button button"><a className="page-title__button--text center" href="">НАЙТИ
            гостиницу</a></div>
        </section>
        {/*<iframe className="map"*/}
        {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105198.13582390833!2d-111.85923215458536!3d34.85380474635181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0!3m2!1sru!2s!4v1653303623615!5m2!1sru!2s"*/}
        {/*        width="100%" height="350" style="border:0;" allowFullScreen="" loading="lazy"*/}
        {/*        referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
      </main>
      <footer className="footer"><p className="footer__text">#visitSEDONA</p>
        <div className="footer__social social">
          <ul className="social__list">
            <li className="social__item button"><a className="social__link" href="">
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.3 0.166728C13 -0.333272 14.4 0.366728 15 1.26673C15.7 1.06673 16.4 0.766728 17.1 0.566728C17.1 1.36673 16.6 2.06673 16.2 2.26673C16.9 2.46673 17.5 1.76673 17.5 1.76673C17.3 2.76673 16.5 3.46673 15.9 3.76673C15.7 10.3667 12.6 14.7667 5.5 14.5667C5 14.5667 5.6 14.5667 5 14.5667C4.6 14.5667 0.7 14.1667 0 12.7667C2.3 12.9667 4 12.3667 4.8 11.6667C3.8 11.3667 2 11.1667 1.7 8.76673C2.1 8.86673 2.3 8.96673 3 8.86673C1.8 8.06673 0.4 7.36673 0.5 5.16673C0.8 5.46673 1.6 5.66673 1.9 5.66673C1.2 5.46673 -0.1 2.36673 1 0.866728C2.9 2.66673 4.8 4.36673 8.4 4.56673C8.5 2.26673 9.5 0.766728 11.3 0.166728Z"
                  fill="white"/>
              </svg>
              Мы в Твиттер</a></li>
            <li className="social__item button"><a className="social__link" href="https://www.facebook.com/htmlacademy">
              <svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.3 3.4C7.1 3.4 7.9 3.4 8.7 3.4C8.7 2.3 8.7 1.2 8.7 0C7.7 0 6.8 0 5.8 0C2.7 0.2 1.5 2.4 1.9 6.1H0V9.6H2C2 12.7 2 15.8 2 18.9C3.3 18.9 4.6 18.9 5.8 18.9C5.8 15.8 5.8 12.7 5.8 9.6H8.7V6.1H5.8C5.8 5.1 5.8 3.7 6.3 3.4Z"
                  fill="white"/>
              </svg>
              Мы в Фейсбуке</a></li>
            <li className="social__item button"><a className="social__link" href="">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.1 0H2.8C1.3 0 0 1.3 0 2.8V11.1C0 12.7 1.3 14 2.8 14H17.1C18.7 14 19.9 12.7 19.9 11.2V2.8C20 1.3 18.7 0 17.1 0ZM7 10.4V3.6L13.8 7L7 10.4Z"
                  fill="white"/>
              </svg>
              Мы на Ютуб</a></li>
          </ul>
        </div>
        <div className="footer__development"><p className="footer__development--text">Разработано</p><a
          className="footer__development--icon" href="" alt="">
          <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.6 0H13.5L0 1.4V26.1L13.5 34.1L26.9 26.1V1.4L13.6 0ZM25 12.1L13.5 5.3V5.2H13.4L13.3 5.1V5.2L1.9 12.1V3.1L13.4 1.9L25 3.1V12.1ZM13.4 6.8L24.9 13.5L20.4 16.1L13.3 11.9V13.3L19.2 16.8L18.3 17.3L13.3 14.3V15.7L17.1 18L16.3 18.5L13.3 16.7V18.1L15.2 19.2L13.4 20.3L2 13.6L13.4 6.8ZM1.9 15.1L13.3 21.9V22.9L5.4 18.2V19.6L13.4 24.4V25.5L5.4 20.8V22.2L13.4 27L21.5 22.1V16.9L24.9 14.9V24.9L13.4 31.8L1.9 25V15.1Z"
              fill="black"/>
          </svg>
        </a></div>
      </footer>
      {/*<script>var nav = document.querySelector('.nav__list');*/}
      {/*  var headerToggle = document.querySelector('.header__bottom--toggle');*/}
      {/*  var navClose = document.querySelector('.nav__bottom--close');*/}

      {/*  headerToggle.addEventListener('click', function() {*/}
      {/*    if (nav.classList.contains('nav--closed')) {*/}
      {/*    nav.classList.remove('nav--closed');*/}
      {/*    nav.classList.add('nav--opened');*/}
      {/*  } else {*/}
      {/*    nav.classList.add('nav--closed');*/}
      {/*    nav.classList.remove('nav--opened');*/}
      {/*  }*/}
      {/*  });*/}
      {/*  navClose.addEventListener('click', function() {*/}
      {/*    if (nav.classList.contains('nav--opened')) {*/}
      {/*    nav.classList.remove('nav--opened');*/}
      {/*    nav.classList.add('nav--closed');*/}
      {/*  }*/}
      {/*  });*/}
      {/*</script>*/}
      </div>
    </>

  )
}
