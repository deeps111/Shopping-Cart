import { call, put } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";

import ApiService from "../service/service";
import { getCartAction } from "../action/action";


function* cartSaga(action) {
  try {
    console.log("hii saga : "+action.id);
    const data = yield call(ApiService);   
    const id = action.id;
 //  console.log("dddd : "+data); 
   yield put({ type : actionTypes.CART.ADD,id : id, data });
    //yield put(getCartAction(action.payload,data));     
   
  } catch (error) {
    yield put({ type : actionTypes.CART.ERROR, error});
    console.log("hiierror: "+error);

  }
}

export default cartSaga;
