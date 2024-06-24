import React, { useContext } from 'react'
import './AddtoCart.css'
import { Link } from 'react-router-dom'
import GlobalContext from '../../context/DataContext'

export const BuyProduct = () => {
    const {totalAmount,cartList,handleOrderBtn}=useContext(GlobalContext)
    let totalProduct=cartList.length
    
  return (
    <>
        <div className='buy-section'>
            <h1>Checkout point</h1>
            <div className='final-product'>
                <span>Total Product</span>
                <span>=</span>
                <span>{totalProduct}</span>
            </div>
            <div className='final-amount'>
                <span>Total Amount</span>
                <span>=</span>
                <span>{totalAmount}</span>
            </div>
            <div className='final-address'>
                <span>Address</span>
                <span>=</span>
                <span>No.. ,City, State.</span>
            </div>
            <button type="button" className='order-btn' onClick={()=>handleOrderBtn()}>Order</button>
        </div>
        <div className='order-success'>
            <h1 type="button" className='order-place-btn'>Your Order placed successfully</h1>
            <Link to="/" className='back-btn-link'>Back to home</Link>
        </div>
    </>
  )
}
