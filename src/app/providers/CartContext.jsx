import React, { createContext, useContext, useState, useEffect } from 'react';

const CartProvider = createContext(); // CartContext

export const useCart = () => {
  return useContext(CartProvider);
};

export const AddCartProviders = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const savedProduct = JSON.parse(localStorage.getItem('product')) ?? [];
    setProduct(savedProduct);
  }, []);

  const addToCart = (item) => {
    const findProduct = product.find((el) => el.id === item.id);
    if (!findProduct) {
      setProduct([...product, item]);
    }
  };

  useEffect(() => {
    localStorage.setItem('product', JSON.stringify(product));
  }, [product]);

  const deleteCartCard = (id) => {
    const newDataProduct = product.filter((el) => el.id !== id);
    setProduct(newDataProduct);
    localStorage.setItem('product', JSON.stringify(newDataProduct));
  };

  return (
    <CartProvider.Provider value={{ product, addToCart, deleteCartCard }}>
      {children}
    </CartProvider.Provider>
  );
};
