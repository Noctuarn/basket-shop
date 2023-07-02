import { useState, useEffect } from "react";
import "./App.scss";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/NavBar/NavBar";
import ShopCardGrid from "./components/ShopCardGrid";
import Basket from "./components/Basket/Basket";

function App() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

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

  return (
    <div className={`app-container ${isBasketOpen ? "app-scroll-lock" : ""}`}>
      <NavBar BasketOnClick={basketToggler} />
      <h1 className="text-success text-center my-5 text-uppercase fw-bold">
        Мої товари
      </h1>

      {isBasketOpen ? <Basket basketClose={basketToggler} /> : null}
      <ShopCardGrid />
    </div>
  );
}

export default App;