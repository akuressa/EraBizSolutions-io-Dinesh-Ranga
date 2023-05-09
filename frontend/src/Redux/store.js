import RootReducer from "./reducers/rootreducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default Store;