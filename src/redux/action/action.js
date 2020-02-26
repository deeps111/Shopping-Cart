import { createAction } from "redux-actions";
import * as actionTypes from "./actionTypes";

export const UserAction = createAction(actionTypes.USERS.ACTION);
export const SortAction = createAction(actionTypes.SORT.ACTION);
export const FilterAction = createAction(actionTypes.FILTER.ACTION);
//export const getCartActions = createAction(actionTypes.CART.ACTION ,(id) => id ,data => data);
//export const getCartAction = createAction(actionTypes.CART.ADD);

 export const getCartActions =(id , data) => ({    
    type: actionTypes.CART.ACTION ,        
          id   ,
          data : data         
          
          
}) 
