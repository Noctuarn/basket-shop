import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";

import SelectedItem from "../SelectedItem";

import "./Basket.scss";

const Basket = ({ basketClose, orderConfirm }) => {
  return (
    <div className="basket">
      <div className="basket-body">
        <div className="basket-header d-flex w-100">
          <div className="basket-logo text-success fw-bold text-20 text-uppercase">
            Мій кошик
          </div>
          <Button onClick={basketClose} className="btn-success">
            <FontAwesomeIcon
              style={{ width: "20px", height: "20px" }}
              icon={faWindowClose}
            ></FontAwesomeIcon>
          </Button>
        </div>

        <div className="basket-content">
          <SelectedItem />
          <SelectedItem />
          <SelectedItem />
          <SelectedItem />
          <SelectedItem />

          <Button onClick={orderConfirm} className="confirm-button btn-success">
            Підтвердити замовлення
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
