import React, { useContext } from 'react'
import './AddtoCart.css'
import GlobalContext from '../../context/DataContext'
import { Link } from 'react-router-dom'

export const AddtoCart = () => {
    const {cartList,handleProQuantity,handleCheckout}=useContext(GlobalContext)
    
  return (
    <div className='shopping_container'>
        <h1>Shopping Cart</h1>
        {cartList.length ? <Link to="/buy" className='checkout-btn' 
        onClick={()=>handleCheckout(cartList)}>Proceed to Checkout</Link>:<></>
        }
        <div className='shopping_list_container'>
            <div className='shopping_cart_container'>
                {cartList.length ?
                    (cartList.map((cart)=>{ 
                        return <div className='new_cart_list' key={cart.mainId}>

                                    <img src={cart.imagePath} alt="" />
                                    <div className='cart_item_details'>
                                        <div className='item_head_list'>
                                            <h3>{cart.imageAltName}</h3>
                                            <p>&#8377; {cart.currentRate}</p>
                                        </div>
                                        <div className='item_bottom_list'>
                                            <label className='quantity-btn' type='button'>Quantity:</label>
                                            <input type="number" id="quantity-count" min="1" max="3" placeholder='1' onChange={(e)=>handleProQuantity(e.target.value,cart)}/>
                                            
                                        </div>  
                                    </div>
                                </div>
                    })
                ):(
                    <>
                        <p>Empty Shopping list</p>
                    </>
                    )}
            </div>
        </div>
    </div>
  )
}
