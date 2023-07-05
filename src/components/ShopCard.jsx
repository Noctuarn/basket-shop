import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ShopCard = ({ id, img, title, text, price, addItems, isOnBasket }) => {
  const handleAddButton = () => {
    addItems(id, img, title, text, price);
  };

  return (
    <Card style={{ width: "340px" }}>
      <Card.Img style={{ width: "100%", height: "auto" }} variant="top" src={img} />
      <Card.Body className="bg-dark">
        <Card.Title className="text-light text-center text-uppercase my-4">
          {title}
        </Card.Title>
        <Card.Text className="text-light">{text}</Card.Text>
        <div className="buy d-flex w-100 justify-content-between align-items-center">
          <Card.Text className="text-light">
            Вартість: <span className="text-success">{price}$</span>
          </Card.Text>

          {isOnBasket ? (
            <Button variant="danger" disabled>
              Додано
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          ) : (
            <Button onClick={handleAddButton} variant="success">
              Додати у кошик   
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;