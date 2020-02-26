import React, { Component } from "react";
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import { getCartAction, getCartActions } from "../../redux/action/action";


class ShoppingList extends Component {
 
  state = { addToCart: false ,itemId : 0 ,redirect : false ,quantity : 0} 

  handleCart = (e) => {   
   // alert("called") ;
    this.setState({ addToCart: true, itemId : e.target.id ,redirect : true});
   console.log(" Sid : "+e.target.id);
   this.props.getCartAction(e.target.id);
  // e.preventDefault();
  };

  render() {
    const { addToCart , redirect} = this.state ;
  //  const { handleCartOne , addToCartList } = this.props;
   
    return (
      <div className="flex-container">
      
        {this.props.content.map((item, index) => (
          <div key={index}>
            <div className ="first-container">
              <img src={item.img_url} width="300" height="150" alt="img"/> <br/>
               {item.name} <br />
               </div>
              
                <div className ="second-container"> <div>Rs {item.price}</div>
                {item.discount !== 0 ? (
                    <div className ="third-container">
                    <div> <h5>{item.price - (item.price * item.discount) / 100 } </h5></div>    
                    <div class="hideDot"> ...</div>                
                    <div> { item.discount }% off </div>
                    </div>
            ) : (
              <div>
                <p> </p>
              </div>
            )} </div>
            <button
              type="button"
              className="btn btn-primary"
              id={item.id}
              onClick={this.handleCart}
            >
              Add to Cart               
            </button>          
          {/* dd { this.props.addToCartList && this.props.addToCartList.map((item) => {return item.id })} */}
            
           { this.props.addToCartList && addToCart === true && redirect === true ?<Redirect to = {{
            pathname: "/cart",
            //state: {id: itemId} ,              
            state : {data : this.props.addToCartList} 
          }
        } /> :
          " "
        }  
             </div>
        ))}
      </div>
      
    );
  }
}

const mapStateToProps = (state)=> ({
  addToCartList : state.cart.cartAdd
 });


const mapDispatchToProps = (dispatch) => ({
      getCartAction: (id,data) => dispatch(getCartActions(id,data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);


