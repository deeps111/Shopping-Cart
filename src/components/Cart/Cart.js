import React, { Component} from "react";

class Cart extends Component {
  render() {
    var style = {
      color: "white",
      background: "#3a2de9",
      fontSize: 18
    };
    return (
      <div>
        <button class="btn" style={style}>
          <i class="fa fa-shopping-cart"></i>
        </button>
      </div>
    );
  }
}

export default Cart;
