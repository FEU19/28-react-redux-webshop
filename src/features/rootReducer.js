import { combineReducers } from 'redux';
import { reducer as cartReducer } from './cart';

const rootReducer = combineReducers({
    // add feature reducer here
    cart: cartReducer
})

export { rootReducer };
