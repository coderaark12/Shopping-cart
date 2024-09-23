import React from "react";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <>
        <footer className="navbar navbar-expand-lg bg-body-tertiary fixed-bottom" data-bs-theme="dark">
          <div className="container-fluid">
            
            <button className="btn btn-danger me-auto" onClick={() => {this.props.resetAll()}}>Reset</button>
            
            <span className="text-white"> Final Price: {this.props.totalPrice} </span>
            
            <button className="btn btn-success ms-auto">Pay Now</button>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
