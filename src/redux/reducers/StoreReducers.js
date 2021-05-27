import {ActionTypes} from '../constants/ActionTypes'

const initialState = {
    products: [
     ], //{id,description,price,img}
    cart:[],
    currentItem:[],
    
    
}

export const productsReducer = (state= initialState,action)=>{
    switch(action.type){
        case ActionTypes.SET_ALL_PRODUCTS:
            return{...state,products:action.payload};
       
        
        case ActionTypes.ADD_TO_CART:
             // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
      case ActionTypes.LOAD_CURRENT_ITEM:
        return{...state, currentItem:action.payload}
                        
      case ActionTypes.QUANTITY_PRODUCT:
        //Check if its in the cart
        const inCart1 = state.cart.find((item) =>
        item.id === action.payload.value.id ? true : false
      );
        return{
          ...state, cart: inCart1 ?  state.cart.map((item)=> item.id === action.payload.value.id
          ?{...item, qty: +action.payload.qty}:item): [...state.cart, {...action.payload.value, qty:+action.payload.qty}],
        }
      
            

     
            

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return{...state,cart: state.cart.filter(item=> item.id !== action.payload.id)}
        case ActionTypes.LOAD_CURRENT_ITEM:
            return{
                ...state,
                currentItem: action.payload
            }

        
    
        default:
            return state

    }


}


  




