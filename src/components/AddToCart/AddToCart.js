import React, { Component } from "react";
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import { getCartAction, getCartActions } from "../../redux/action/action";
import ShoppingList from "../ShoppingList/ShoppingList";

class AddToCart extends Component {
  state = { quantity : 1} ;

  handleIncrement = (e, item,index) => {    
    let a = e.target && e.target.id;
    let b = item.id;      
    if (a == b) {     
      this.setState({ quantity : this.state.quantity + 1 });
    }
  };

  handleDecrement = (e, item) => {   
    let a = e.target && e.target.id;
    let b = item.id;   
    if (a == b) {
      console.log("match : " + this.state.quantity);
      if(this.state.quantity !== 1){
      this.setState({ quantity : this.state.quantity - 1 });
      }
      else{
        alert("Remove Item ");
      }
    }
  };

  render() {    
   // const { addToCart , itemId ,redirect} = this.state ;
    const { addToCartList } = this.props;
    //const id = this.props.location.state && this.props.location.state.id;
    const data = this.props.location.state && this.props.location.state.data;
    console.log("Add to cart");
    console.log(data);
    return (
      <div className="flex-container">
     
        <h3> My Cart </h3>
        <div className="cart">
          {!data && (
            <div>
              <h3> Your Cart is Empty </h3>
            </div>
          )}      
          
         {data &&
          data
              .map((item, index) => (
                <div key={index}>
                  <div className="first-container">
                    <div>
                      {" "}
                      <img src={item.img_url} width="300" height="150" />
                    </div>
                    <div> {item.name} </div>
                    <div>
                      <h6>Quatity </h6>
                      <button type="button" class="btn">                       
                      
                        <i class="fa fa-minus" id={item.id} onClick={() =>
                          this.handleDecrement(
                            window.event,
                            item,
                            index
                          )}></i>
                      </button>
                      <input
                        type="text"
                        width="10px"
                        height="5px"
                        value={this.state.quantity}
                        readOnly
                      />
                      <button
                        type="button"
                        class="btn"
                        
                      >
                        <i class="fa fa-plus" id={item.id}                        
                        onClick={() =>
                          this.handleIncrement(
                            window.event,
                            item,
                            index
                          )
                        }></i>
                      </button>
                    </div>
                  </div>
                  <div className="second-container">
                    <div> Rs {item.price}</div>

                    {item.discount !== 0 ? (
                      <div className="third-container">
                        <div>
                          {" "}
                          <h5>
                            {item.price - (item.price * item.discount) / 100}
                          </h5>
                        </div>
                        <div class="hideDot"> ...</div>
                        <div> {item.discount}% off </div>
                      </div>
                    ) : (
                      <div>
                        <p> </p>
                      </div>
                    )}
                  </div>
                </div>
              )) }
        </div>
      </div>
    );
  }
};




export default AddToCart;
