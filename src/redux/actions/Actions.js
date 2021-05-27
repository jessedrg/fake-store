import {ActionTypes} from '../constants/ActionTypes'

export const setProducts = (products)=>{
    return {
        type: ActionTypes.SET_ALL_PRODUCTS,
        payload:products

    }
}

export const removeProducts = (itemID)=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: {
            id:itemID

    }
}}

export const AddCart = (itemID) =>{
    return {
        type: ActionTypes.ADD_TO_CART,
        payload:{
            id:itemID
        }
        
    }
}

export const ChangeQuantity = (value,qty)=>{
    return{
        type:ActionTypes.QUANTITY_PRODUCT,
        payload:{
            value:value,
            qty:qty
        }

    }
}

export const loadCurrentItem= (item)=>{
    return{
    type: ActionTypes.LOAD_CURRENT_ITEM,
    payload:item
    }
}
