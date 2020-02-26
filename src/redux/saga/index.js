import { all ,takeLatest } from 'redux-saga/effects'
import userSaga from './userSaga'
import * as actionTypes from "../action/actionTypes";
import sortSaga from './sortSaga';
import cartSaga from './CartSaga';


export function * rootSaga() { 
   // console.log("gg "+UserAction() + actionTypes.USERS.ACTION );
   /*
       takeLatest :
            Each time an action is dispatched to the store. And if this action matches pattern, takeLatest starts 
            a new saga task in the background. If a saga task was started previously (on the last
           action dispatched before the actual action), and if this task is still running, the task will be cancelled.
   */
    yield all ( [yield  takeLatest(actionTypes.USERS.ACTION , userSaga) ],
    [yield  takeLatest(actionTypes.SORT.ACTION , sortSaga) ],
    [yield  takeLatest(actionTypes.CART.ACTION , cartSaga) ]);
}