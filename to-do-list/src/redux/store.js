import { createStore } from "redux";
// import {thunk} from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "./reducers/index";

// const middleware = [thunk];

const store = createStore(
    rootReducer,
    // composeWithDevTools( applyMiddleware(...middleware))
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;