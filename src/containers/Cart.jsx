import { getByTitle } from '@testing-library/dom';
import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import {ChangeQuantity} from '../redux/actions/Actions'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CSS-containers/Cart.css'
import CartDrop from './CartDrop';




const Cart = () => {
    let totalValue =0;
    const [falseDefault,setFalseDefault] = React.useState(false);
    const cartProducts = useSelector(state=> state.allProducts.cart )
    const totalQty =()=>{ cartProducts.map(value=>{
        totalValue = totalValue + value.qty
        
    })}
    
       
            
        

    totalQty()
    const dispatch = useDispatch();
    const selectedProducts = useSelector(state=>state.allProducts.cartProducts)
    return(
    <div>
        <div className='display'>
            <div>
              <h2 className='circle1'>{totalValue}</h2>
            </div>
            <div>
            <AiOutlineShoppingCart className='my-icon' onClick={()=>falseDefault ? setFalseDefault(false):setFalseDefault(true)}/>
            </div>
        </div>
            {falseDefault ? <CartDrop/>:''}
    </div>
        
    )
}

export default Cart
