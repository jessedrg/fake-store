import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import './CSS-containers/CartDrop.css'
import { BsXCircle } from 'react-icons/bs';
import {removeProducts} from '../redux/actions/Actions'

const CartDrop = () => {
    const dispatch = useDispatch();
    let total = 0
    const cartProducts = useSelector(state=> state.allProducts.cart )
    const totalPrice= ()=>{
         cartProducts.map(value=>{
             const {price,qty} = value
             total = Math.round(total+(price*qty));


        })
    }
  totalPrice()

    const object = cartProducts.map(product=>{
            const {title,price,qty,id} = product;
        return(
            <div>
                <div className=''>
                <div><h1>{title}</h1></div>
                <div><BsXCircle className='BsDrop' onClick={()=> dispatch(removeProducts(id))}/></div>
                </div>
                <div>
                    {price}$ x{qty}
                </div>      
            </div>
            )

        }
        
    )
    return(
    <div className='card'>
        {object}
    <div>
        Total Price: {total}$
    </div>
    
    </div>
    )
}

export default CartDrop
