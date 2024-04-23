

function CarCardInfo() {
  return (
    <div className="container card-container">
      <h3 className="card-container__car-title">Kia Presto 2019</h3>
      <div className="card-container__desc-container">
        <div className="desc-container__desc-item">
          <p>Марка</p>
          <p className="desc-item__right">Kia</p>
        </div>
        <div className="desc-container__desc-item">
          <p>Модель</p>
          <p className="desc-item__right">Presto</p>
        </div>
        <div
          
          className="desc-container__desc-item"
        >
          <p>Пробег</p>
          <p className="desc-item__right">500 км</p>
        </div>
        <div className="desc-container__desc-item">
          <p>Год</p>
          <p className="desc-item__right">2019</p>
        </div>
        <div className="desc-container__desc-item">
          <p>Комиссия парка</p>
          <p className="desc-item__right">0.1%</p>
        </div>
        <div
          style={{ marginBottom: "25px" }}
          className="desc-container__desc-item"
        >
          <p>Коробка передач</p>
          <p className="desc-item__right">Автомат</p>
        </div>
        <div className="desc-container__desc-item">
          <p>Тип топлива</p>
          <p className="desc-item__right">Бензин</p>
        </div>
        <div className="desc-container__desc-item">
          <p>Название парка</p>
          <p style={{ marginBottom: "px" }} className="desc-item__right">
            Predator
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarCardInfo