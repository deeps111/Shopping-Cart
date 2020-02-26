import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { rootSaga } from '../saga';
import { root } from '../reducer';

// createSagaMiddleware connects saga to reducer .
const sagaMiddleware = createSagaMiddleware();
const store = createStore(root ,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


export default store;
