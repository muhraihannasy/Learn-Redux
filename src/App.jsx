import { useCallback, useEffect, useState } from "react";

import { Provider, useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";

import store from "./store/store";
import { AddToCartItem } from "./store/cart/cart.action";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    for (let i = 1; i <= 50; i++) {
      const product = {
        id: uuidV4(),
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 1000) + 1,
      };

      setProducts((prev) => [...prev, product]);
    }
  }, []);

  return (
    <Provider store={store}>
      <ListProducts data={products} />
    </Provider>
  );
}

function ListProducts({ data = [] }) {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback((product) => {
    dispatch(AddToCartItem(product));
  }, []);

  return (
    <section>
      <h2 style={{ color: "white" }}>List Of Products</h2>

      <aside className="flex">
        <div className="flex flex-1 gap-4 flex-wrap ">
          {data?.map((item, index) => (
            <CartItem
              key={item?.id}
              item={item}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <CartItems />
      </aside>
    </section>
  );
}

function CartItems({}) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="bg-zinc-600 w-[300px] sticky top-5 h-[30em]">
      <h2>Cart ITEM</h2>

      {cartItems?.map((item, index) => (
        <div className="mb-10">
          <div className="w-full bg-slate-700 flex items-center justify-center rounded-md p-4 mb-7">
            {item?.name}
          </div>
          <button onClick={() => onAddToCart(item)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

function CartItem({ item, onAddToCart = () => {} }) {
  const { name, price, id } = item;

  return (
    <div className="mb-10">
      <div className="w-full bg-slate-700 flex items-center justify-center rounded-md p-4 mb-7">
        {name}
      </div>
      <button onClick={() => onAddToCart(item)}>Add To Cart</button>
    </div>
  );
}

export default App;
