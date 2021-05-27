import React from 'react'
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import './CSS-containers/ProductComponent.css'
import {AddCart} from '../redux/actions/Actions'
import {loadCurrentItem} from '../redux/actions/Actions'

const ProductComponent = () => {
    const products = useSelector(state=> state.allProducts.products)
    const dispatch = useDispatch();
    console.log(products)
    
    
      const renderlist = products.map((value)=>{
        let thevalue = value.id
        
        const {id,title,price,description,image} = value;
        
        const addToCart = ()=>{
          dispatch(AddCart(thevalue))
          console.log(thevalue)

          
        }
          return (
        <div>
          
            <div className='card level containerFlex'>
              
                <Link to={`/product/${id}`}>
                  <div className='card-image level-item img'>
                   <img src={image} alt={title} />
                  </div>
                </Link>
                  <div className='card-header-title flexbox'>
                    <div className='title'>
                      {title}
                    </div>
                    <div>
                      {price}$
                    </div>
                      <button onClick={addToCart} className='button is-primary'>Add to cart</button>
  
                  
  
                  </div>
                
  
            </div>
            
          </div>
          )}
            
      )
    return <>{renderlist}</>

}
          

export default ProductComponent
