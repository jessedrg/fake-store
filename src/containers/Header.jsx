import React from 'react'
import Cart from './Cart'
import './CSS-containers/Header.css'

const Header = () => {
    return (
        <div className='navbar cartContainer1 '>
            <div className='navbar-brand navbar-start'>
                <h1 className='bold1'>Jesse Redux Store</h1>
            </div>
            <div className='navbar-end'>
              <Cart/>
            </div>
        </div>
    )
}

export default Header
