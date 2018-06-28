// TODO: implement combine reducer functionality

import {combineReducers} from 'redux';
import cart  from './cartReducer';
import list  from './listReducer';


const redComb = combineReducers({
    cart,
    list
});
export default redComb;