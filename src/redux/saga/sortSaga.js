import { call, put } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";

import ApiService from "../service/service";


function* sortSaga() {
  try {
    const data = yield call(ApiService);
    //console.log(data);
    yield put({ type : actionTypes.SORT.HIGH_LOW, data});
    yield put({ type : actionTypes.SORT.LOW_HIGH, data});
   
    console.log("hii : ");
   // console.log(data);
  } catch (error) {
    yield put({ type : actionTypes.SORT.ERROR, error});
    console.log("hiierror: "+error);

  }
}

export default sortSaga;
