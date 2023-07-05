import ShopCard from "./ShopCard";
import Pagination from "react-bootstrap/Pagination";

import { gameConsoles } from "../GAME_CONSOLES";

const ShopCardGrid = ({ addItems, basketState }) => {
  return (
    <div className="shop-cards-grid">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        {gameConsoles.map((el) => {
          const isOnBasket = basketState.basketItems.some(
            (item) => item.id === el.id
          );
          return (
            <ShopCard
              key={el.id}
              id={el.id}
              img={el.img}
              title={el.title}
              text={el.text}
              price={el.price}
              addItems={addItems}
              isOnBasket={isOnBasket}
            />
          );
        })}
      </div>

      <Pagination className="d-flex justify-content-center w-100">
        <Pagination.First linkClassName="text-success bg-dark" />
        <Pagination.Prev linkClassName="text-success bg-dark" />
        <Pagination.Item linkClassName="text-success bg-dark">
          {1}
        </Pagination.Item>
        <Pagination.Ellipsis linkClassName="text-success bg-dark" />

        <Pagination.Item linkClassName="text-success bg-dark">
          {10}
        </Pagination.Item>
        <Pagination.Item linkClassName="text-success bg-dark">
          {11}
        </Pagination.Item>
        <Pagination.Item linkClassName="text-success bg-dark">
          {12}
        </Pagination.Item>
        <Pagination.Item linkClassName="text-success bg-dark">
          {13}
        </Pagination.Item>
        <Pagination.Item linkClassName="text-success bg-dark">
          {14}
        </Pagination.Item>

        <Pagination.Ellipsis linkClassName="text-success bg-dark" />
        <Pagination.Item linkClassName="text-success bg-dark">
          {20}
        </Pagination.Item>
        <Pagination.Next linkClassName="text-success bg-dark" />
        <Pagination.Last linkClassName="text-success bg-dark" />
      </Pagination>
    </div>
  );
};

export default ShopCardGrid;
