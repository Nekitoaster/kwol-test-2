function ContactCard() {
  return (
    <div className="container contact-card-container">
      <div className="contact-card-container__key-line">
        <p>Адрес парка</p>
        <p>График работы</p>
      </div>
      <div className="contact-card-container__value-line">
        <div className="value-line__value-item">
          <img className="value-item__icon" src="public/svg/geolocation.svg" />
          <p className="text-blue">Москва, ул. Поморская 15с1, 127410</p>
        </div>
        <div className="value-line__value-item value-line__schedule">
          <img
            className="value-item__icon value-item__icon_watch"
            src="public/svg/watch.svg"
          />
          <div className="schedule__schedule-list">
            <p>Пн - Пт: 10:00 - 22:00</p>
            <p>Сб - Вс: выходной</p>
          </div>
        </div>
      </div>
      <div className="contact-card-container__key-line">
        <p style={{ marginTop: "-3px", marginBottom: "2px" }}>Телефон</p>
      </div>
      <div className="contact-card-container__value-line">
        <p>+7(999) 123-45-67</p>
      </div>
      <div className="contact-card-container__value-line">
        <p style={{ marginTop: "2px"}}>О парке</p>
        <img className="value-line__arrow" src="public/svg/down-arrow.svg" />
      </div>
      <button className="button button_small">Смотреть похожие</button>
    </div>
  );
}

export default ContactCard;
