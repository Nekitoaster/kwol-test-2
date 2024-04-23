function PayCardInfo() {
  return (
    <div className="container pay-container">
      <h3 className="pay-container__title">Выберите стоимость и схему дней</h3>
      <div className="pay-container___pay-buttons-container">
        <div className="pay-buttons-container__price-change">
          <h2 className="price-change__price">1 650 ₽</h2>
          <p className="price-change__schedule">7 раб. / 0 вых.</p>
          <span className="price-change__arrow-icon">
            <img src="public/svg/down-arrow.svg" />
          </span>
        </div>
        <button className="button button_large">Забронировать</button>
      </div>
    </div>
  );
}

export default PayCardInfo;
