import { handleActions } from "redux-actions";
import * as actionTypes from "../action/actionTypes";

const initialState = {
  data: [],
  error: "",    
  
};

const cartReducer = handleActions(
  {
    [actionTypes.CART.ADD]: (state, action) => {
      console.log(action);
      console.log("car Reducer : ");
      console.log(action.data);
      const { id , data } = action;      
      console.log(data
        .filter((item) => {
          return item.id == id;
        })) ;
      const cartAdd = data
          .filter((item) => {
            return item.id == id;
          }); 
         console.log("add to cart");
         console.log(cartAdd);
      return {
        ...state ,
        cartAdd
      };
    },
    [actionTypes.CART.REMOVE]: (state, action) => {
      //console.log(action);
      const { data } = action;    
      //console.log("sorted");
         const removeFromCart = data.map((item) => { return item } ).sort((a,b) => {return a.price-b.price });
         console.log(removeFromCart);
      return {
        ...state,
        removeFromCart
      };
    },

    [actionTypes.CART.ERROR]: (state, action) => {
      console.log(action);
      const { error } = action;
      return { ...state, error };
    }
  },
  initialState
);

export default cartReducer;
