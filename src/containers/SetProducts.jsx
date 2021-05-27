import React, { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setProducts} from '../redux/actions/Actions'
import axios from "axios";
import ProductComponent from './ProductComponent.jsx'
import './CSS-containers/SetProducts.css'



const SetProducts = () => {
    const dispatch = useDispatch()
    const loadProducts =async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log('Err:',err)})
        
        
        dispatch(setProducts(response.data))
    
    }
    useEffect(() => {
        loadProducts();
      }, []);
    return (
        <div className='displayflex'>
           <ProductComponent/>
        </div>
    )
}

export default SetProducts
