import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";

import SelectedItem from "../SelectedItem";

import "./Basket.scss";

const Basket = ({
  basketClose,
  orderConfirm,
  removeFromBasket,
  basketItems,
  totalPrice,
  clearBasket,
}) => {

  return (
    <div className="basket">
      <div className="basket-body">
        <div className="basket-header d-flex w-100">
          <div className="basket-logo text-success fw-bold text-uppercase">
            Мій кошик
          </div>
          <Button onClick={basketClose} className="btn-success">
            <FontAwesomeIcon
              style={{ width: "20px", height: "20px" }}
              icon={faWindowClose}
            />
          </Button>
        </div>

        <div className="basket-content">
          {basketItems.map((el) => (
            <SelectedItem
              key={el.id}
              id={el.id}
              img={el.img}
              title={el.title}
              price={el.price}
              removeFromBasket={() => {removeFromBasket(el.id)}}
            />
          ))}

          <h4 className="order-price">
            Загальна ціна:{" "}
            <span className="text-success fw-bold">
              {totalPrice.toFixed(2)} $
            </span>
          </h4>

          <div className="order d-flex justify-content-between w-100 align-items-center my-2">
            <Button
              onClick={orderConfirm}
              className="confirm-button btn-success"
            >
              Підтвердити замовлення
            </Button>

            <Button onClick={clearBasket} className="delete-button btn-danger">
              Очистити кошик
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
