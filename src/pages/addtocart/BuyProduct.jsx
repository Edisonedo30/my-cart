import React, { useContext } from 'react'
import './AddtoCart.css'
import GlobalContext from '../../context/DataContext'
import { Link } from 'react-router-dom'

export const BuyProduct = () => {
    const {totalAmount,cartList,handleOrderBtn}=useContext(GlobalContext)
  return (
    <>  
    <div className='buy-product-container'>
            <h1>Checkout point</h1>
            <div className='buyy'>
                <div className='proceed_checkout'>
                    <div className='checkout-item-list'>
                        {cartList.map((cart)=>{
                            return <div className='c-item' key={cart.mainId}>
                                        <span>{cart.imageAltName}</span>
                                        <div>
                                            <span>{cart.currentRate}</span>
                                            <span>x</span>
                                            <span>{cart.quantity}</span>
                                        </div>
                                        <span>=</span>
                                        <span>{cart.newRate}</span>
                                    </div>
                        })}
                    </div>
                    <div className='total-amount'>
                        <span>Total</span>
                        <span> : </span> 
                        <span>{totalAmount}</span>                
                    </div>
                </div>
                <div className='buy-section'>  
                    <div className='final-product'>
                        <span>Total Product</span>
                        <span>=</span>
                        <span>{cartList.length}</span>
                    </div>
                    <div className='final-amount'>
                        <span>Total Amount</span>
                        <span>=</span>
                        <span>{totalAmount}</span>
                    </div>
                    <div className='final-address'>
                        <span>Customer Address</span>
                        <span>=</span>
                        <span>No.. ,City, State.</span>
                    </div>
                </div>
                <button type="button" className='order-btn' 
                onClick={()=>handleOrderBtn()}>Order</button>
            </div>
        </div>
        <div className='order-success'>
                <h1 type="button" className='order-place-btn'>Your Order placed successfully</h1>
                <Link to="/" className='back-btn-link'>Back to home</Link>
        </div>
    </>

  )
}
