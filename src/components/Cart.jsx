// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <h1>Ruthrapathi-Shopping Cart</h1>
      
      {products.map(product => (
        <div key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: '100px', marginRight: '10px' }} />
          <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              
              <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
              <p>{product.quantity || 1}</p>
              <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
          
            </div>
          
          </div>
          
        </div>
      
      ))}
      <h2>Total Quantity: {totalQuantity}</h2>
      <h2>Total Amount: ${totalAmount}</h2>
    </div>
  );
};

export default Cart;
