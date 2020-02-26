import { call, put } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";

import ApiService from "../service/service";


function* userSaga() {
  try {
    const data = yield call(ApiService);    
    yield put({ type : actionTypes.USERS.SUCCESS, data});   
    
   // console.log(data);
  } catch (error) {
    yield put({ type : actionTypes.USERS.ERROR, error});
    console.log("hiierror: "+error);

  }
}

export default userSaga;
