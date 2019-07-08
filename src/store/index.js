import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// 创建store的时候，第二个参数是中间件，redux-thunk提供了一个thunk中间件，用于处理异步的action
let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store