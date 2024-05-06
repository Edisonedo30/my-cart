import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import GlobalContext from '../../../context/DataContext';

export const OneProduct = () => {
    const {productType,handleCart}=useContext(GlobalContext)
    const {id}=useParams();
    const Item=productType.map(itemMap=>{
       return itemMap.itemLists.find(itemFind=>{
        return itemFind.mainId === Number(id)
       })
    })
    const matchedItem=Item.find(matchItem=>{
      return (matchItem) ? matchItem :matchItem
    })
    
  return (
  <>
    <div className='one-product-section'>
        <div className='product-image'>
            <img src={matchedItem.imagePath} alt={matchedItem.imageAltName} />
            <div className='product_checkout'>
              <Link to='/addtocart'><button className='add_to_cart' type='button' 
              onClick={()=>handleCart(matchedItem)}>ADD TO CART</button></Link>
              <Link to='/buy'><button className='buy_now' type='button'>BUY NOW</button></Link>
            </div>
        </div>
        <div className='product-details'>
                <h1>{matchedItem.imageDescription}</h1>
                <div className='product_rating_area'>
                    <span className='product_overall_rating'>4.7</span>
                    <div className='product_rating_star'>
                      <span><FaStar className='overall_star_icon'/></span>
                      <span><FaStar className='overall_star_icon'/></span>
                      <span><FaStar className='overall_star_icon'/></span>
                      <span><FaStar className='overall_star_icon'/></span>
                      <span><FaStarHalfAlt className='overall_star_icon'/></span>
                    </div>
                    <span>& <small>26,503</small>Ratings</span>
                </div>      
            <p>Extra Offers Available</p>
            <div className='product_price_detail'>                                       
                <p className='product_currentrate'>	&#8377;{matchedItem.currentRate}</p>
                <span className='product_previousrate'>&#8377;{matchedItem.previousRate}</span>
                <span className='product_offer_detail'>30% off</span>
            </div>
            <div className='product_available_offer'>
              <p>Available offers</p>
              <p><span><MdLocalOffer className='offer_symbol'/></span><strong>Bank Offer</strong> 10% Instant Discount on ICICI Bank Credit Card, up to ₹1000 on orders of ₹5,000 and above<span>T&C</span></p>
              <p><span><MdLocalOffer className='offer_symbol'/></span><strong>Bank Offer</strong> 16% Instant Discount on SBI Bank Debit Card, up to ₹900 on orders of ₹3,000 and above<span>T&C</span></p>
              <p><span><MdLocalOffer className='offer_symbol'/></span><strong>Bank Offer</strong> 33% Instant Discount on Yes Bank Credit Card, up to ₹2300 on orders of ₹7,000 and above<span>T&C</span></p>
              <p><span><MdLocalOffer className='offer_symbol'/></span><strong>Bank Offer</strong> 25% Instant Discount on ICICI Bank Credit Card, up to ₹1600 on orders of ₹6,200 and above<span>T&C</span></p>
            </div>  
          </div> 
      </div>
  </>
    
  )
}

export default OneProduct