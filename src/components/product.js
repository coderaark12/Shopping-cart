import React from "react";

export default function product(props) {
  return (
    <>    
      <div className="container">
        <div className="row mt-3">
          <div className="col-3">
            <p>{props.product.name}</p>
          </div>
          <div className="col-3">
            <p>₹{props.product.price}</p>
          </div>

          <div className="col-3">
            <button className="btn" onClick={() => {props.decrementQuantity(props.index)}}>-</button>
            <span className="btn">{props.product.quantity}</span>
            <button className="btn" onClick={() => {props.incrementQuantity(props.index)}}>+</button>
          </div>

          <div className="col-1">
            <p> {props.product.quantity * props.product.price} </p>
          </div>

        <button className="btn btn-danger col" onClick={() => {props.removeItem(props.index)}}>Remove</button>

          
        </div>
      </div>
    </>
  );
}
