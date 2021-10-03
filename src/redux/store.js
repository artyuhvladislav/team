import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import movies from "./reducers/movies";


const reducers = combineReducers({
  movies,
});

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store
export default store;
