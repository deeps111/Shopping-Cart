import { call, put } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";

import ApiService from "../service/service";


function* filterSaga() {
  try {
    const data = yield call(ApiService);
    //console.log(data);
    yield put({ type : actionTypes.FILTER.ADD, data});
    yield put({ type : actionTypes.FILTER.REMOVE, data});  
    
   // console.log(data);
  } catch (error) {
    yield put({ type : actionTypes.FILTER.ERROR, error});
    console.log("hiierror: "+error);

  }
}

export default filterSaga;
