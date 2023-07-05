import { useState, useEffect, useReducer } from "react";
import "./App.scss";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/NavBar/NavBar";
import ShopCardGrid from "./components/ShopCardGrid";
import Basket from "./components/Basket/Basket";

import basketReducer, { initialState } from "./basketReducer";


function App() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [basketState, dispatch] = useReducer(basketReducer, initialState);

  const addItems = (id, img, title, text, price) => {
    dispatch({
      type: "ADD_ITEM",
      payload: { item: { id, img, title, text, price } }
    });
  };

  const removeFromBasket = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id
    })
  };

  const clearBasket = () => {
    dispatch({
      type: "CLEAR_BASKET"
    })
  }

  const confirmOrder = () => {
      alert("Дякую, Ваше замовлення оформлено")

      dispatch({
        type: "CLEAR_BASKET"
      })
  }

  const basketToggler = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  useEffect(() => {
    if (isBasketOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isBasketOpen]);


  const totalPrice = basketState.basketItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className={`app-container ${isBasketOpen ? "app-scroll-lock" : ""}`}>
      <NavBar BasketOnClick={basketToggler} itemsCount={basketState.basketItems.length} />
      <h1 className="text-success text-center my-5 text-uppercase fw-bold">Мої товари</h1>

      {isBasketOpen ? (
        <Basket
          basketClose={basketToggler}
          basketItems={basketState.basketItems}
          totalPrice={totalPrice}
          removeFromBasket={removeFromBasket}
          clearBasket={clearBasket}
          orderConfirm={confirmOrder}
        />
      ) : null}
      <ShopCardGrid addItems={addItems} basketState={basketState} />
    </div>
  );
}

export default App;