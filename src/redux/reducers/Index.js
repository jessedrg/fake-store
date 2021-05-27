import {combineReducers} from 'redux'
import {productsReducer} from './StoreReducers'


const reducers = combineReducers( {
    allProducts:productsReducer
    

})

export default reducers