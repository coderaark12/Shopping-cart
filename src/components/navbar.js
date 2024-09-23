import React from "react";

class Navbar extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Shopping Cart
            </a>

            <p className="navbar-brand">Total Items: {this.props.totalItems} </p>

          </div>
        </nav>

        <div className="container">
          <div className="row">
            <h3 className="col-3">Product</h3>
            <h3 className="col-3">Price</h3>
            <h3 className="col-3">Quantity</h3>
            <h3 className="col">Total</h3>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
