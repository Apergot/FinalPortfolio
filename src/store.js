import { applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    //when in production avoid devtools, it causes blank page on mobile browsers
    compose(
        applyMiddleware(...middleware)/*,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
    )
);

export default store;