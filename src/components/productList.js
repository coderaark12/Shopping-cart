import React from 'react';
import Product from './product';

export default function productList(props) {
    // console.log(props);
  return (

      props.productList.map((product,i) => {
          return <Product 
          product = {product}
          index = {i}
          incrementQuantity = {props.incrementQuantity}
          decrementQuantity = {props.decrementQuantity}
          removeItem = {props.removeItem}
          />    
      })

    );
}
