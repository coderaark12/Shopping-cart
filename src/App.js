import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import Footer from './components/footer';
import React, { useState } from 'react';


function App() {
  let products = [
    {
      price: 999,
      name: "Product 1",
      quantity: 0
    },
    {
      price: 99,
      name: "Product 2",
      quantity: 0
    }
  ];

  let [productList, setProductList] = useState(products);
  let [totalPrice, setTotalPrice] = useState(0);
  let [totalItems, setTotalItems] = useState(products.length);

  let incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalPrice = totalPrice;
    newProductList[index].quantity++;
    newTotalPrice += newProductList[index].price;
    setTotalPrice(newTotalPrice);
    setProductList(newProductList);
  };

  let decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalPrice = totalPrice;

    if(newProductList[index].quantity > 0){
      newProductList[index].quantity--;
      newTotalPrice -= newProductList[index].price;
    }
    else {
      newProductList[index].quantity = 0;
    }
    setTotalPrice(newTotalPrice);
    setProductList(newProductList);
  };
  
  let removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalPrice = totalPrice;
    let newTotalItems = totalItems;
    newTotalPrice -= newProductList[index].price * newProductList[index].quantity;
    newProductList.splice(index, 1);
    newTotalItems--;

    setTotalItems(newTotalItems);
    setTotalPrice(newTotalPrice);
    setProductList(newProductList);
  };

  let resetAll = () => {
    let newProductList = [...productList];
    let newTotalPrice = 0;
    newProductList.forEach(product => {
      product.quantity = 0;
    });
    setTotalPrice(newTotalPrice);
    setProductList(newProductList);
  }

  return (
    <>
    <Navbar totalItems = {totalItems} />
    <main>
      <ProductList 
      productList = {productList}
      incrementQuantity = {incrementQuantity}
      decrementQuantity = {decrementQuantity}
      removeItem = {removeItem}
      />
    </main>
    <Footer totalPrice = {totalPrice} resetAll = {resetAll} />
    </>
  );
}

export default App;
