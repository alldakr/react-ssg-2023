import { useState } from 'react';
import styles from './ShoppingCart.module.css';
import Products from './Products';
import Cart from './Cart';

const products = [
  { id: 'item-A', title: '상품 A', price: 9100 },
  { id: 'item-B', title: '상품 B', price: 7650 },
  { id: 'item-C', title: '상품 C', price: 10320 },
  { id: 'item-D', title: '상품 D', price: 1200 },
];

function ShoppingCart() {
  const [items] = useState(products);
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    const existItem = cart.find((i) => i.id === item.id);
    if (existItem) {
      setCart((cart) =>
        cart.map((item) => {
          if (item.id === existItem.id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        })
      );
    } else {
      setCart((cart) => [...cart, { ...item, amount: 1 }]);
    }
  };

  const removeCart = (item) => {
    const existItem = cart.find((i) => i.id === item.id);
    if (existItem && existItem.amount > 1) {
      setCart((cart) =>
        cart.map((item) => {
          if (item.id === existItem.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
      );
    } else {
      setCart((cart) => cart.filter((i) => i.id !== item.id));
    }
  };

  return (
    <div className={styles.component}>
      <Products items={items} onAdd={addCart} />
      <Cart cart={cart} onRemove={removeCart} />
    </div>
  );
}

export default ShoppingCart;
