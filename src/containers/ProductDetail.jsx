import React from 'react'
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import {loadCurrentItem} from '../redux/actions/Actions'
import {ChangeQuantity,AddCart} from '../redux/actions/Actions'
import {useForm} from 'react-hook-form'
import axios from "axios";
import './CSS-containers/ProductDetail.css'

const ProductDetail = () => {
    const {register,handleSubmit} = useForm()
    const {productId} = useParams();
    const dispatch = useDispatch()
    const product = useSelector(product=> product.allProducts.currentItem)
    console.log(productId)
   const fetchProduct = async()=>{
       const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>{
           console.log('err:',err)
       })
       dispatch(loadCurrentItem(response.data))

   }
   React.useEffect(()=>{
       if(productId && productId!==''){
           fetchProduct()
       }

   },[productId])
   const getQuantity = (data)=>{
       console.log(data.qty)
       dispatch(ChangeQuantity(product,data.qty))

   }
    
    return (
        <div className='bigContainer2'>
            <div className='imag imgContainer1'>
               <img src={product.image} alt={product.title} />
            </div>
            <div className='box onlyProduct1'>
                <div>
                    <div>
                    <h1 className='card-header-title'>{product.title}</h1>
                    </div>
                    <div>
                       <h1 className='card-header-title'>{product.price} $</h1>
                    </div>
            
                </div>
                <div>
                    <p className='card-header-title'>Description:</p>
                    <p className='card-content'>{product.description}</p>
                </div>
                <form onSubmit={handleSubmit(getQuantity)} className='flex2'>
                    <input className='input input1' type="number" id="value" min='0' {...register("qty")}/>
                    <input type='submit' value='Add to cart' className='button is-primary'/>
                </form>
                    
                    
                 
                    
            </div>

            
        </div>
    )
}

export default ProductDetail
