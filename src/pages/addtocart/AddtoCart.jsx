import React, { useContext } from 'react'
import './AddtoCart.css'
import GlobalContext from '../../context/DataContext'
export const AddtoCart = () => {
    const {cartList,totalAmount,handleCheckout}=useContext(GlobalContext)
  return (
    <div className='shopping_container'>
        <h1>Shopping Cart</h1>
        <div className='shopping_list_container'>
            <div className='shopping_cart_container'>
                {cartList.length ?
                    (cartList.map((cart)=>{ 
                        return <>
                                <div className='new_cart_list'>
                                    <input className="check-btn" type="checkbox" checked={cart.checked} 
                                    onClick={()=>cart.checked = false}/>
                                    <img src={cart.imagePath} alt="" />
                                    <div className='cart_item_details'>
                                        <div className='item_head_list'>
                                            <h3>{cart.imageAltName}</h3>
                                            <p>&#8377; {cart.currentRate}</p>
                                        </div>
                                        <div className='item_bottom_list'>
                                            <div> 
                                                {/* <label className='quantity-btn' type='button'>Quantity : </label> */}
                                                
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                </>
                    })
                ):(
                    <>
                        <p>Empty Shopping list</p>
                    </>
                    )}
            </div>
                
            <div className='proceed_checkout'>
                <h3>Checkout</h3>
                <div className='checkout-item-list'>
                {cartList.length ?
                    (cartList.map((cart)=>{
                        return<>
                                <div className='c-item'>
                                    <span>{cart.imageAltName}</span>
                                    <span>=</span>
                                    <span onChange={()=>handleCheckout(cart.currentRate)}>{cart.currentRate}</span>
                                </div>
                            </>
                    }))
                :
                <><h3>0</h3></>}
                </div>
                <div className='total-amount'>
                    <span>Total</span>
                    <span> : </span>
                    <span>{totalAmount}</span>
                                   
                </div>
                <button type='button' className='checkout-btn'>Proceed to checkout</button>
            </div>
        </div>
    </div>
  )
}
