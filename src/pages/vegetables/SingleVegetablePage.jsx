import React from 'react'
import "./VegetableListPage.css"
import { useParams } from 'react-router-dom'
import StarSharpIcon from '@mui/icons-material/StarSharp';
import StarHalfSharpIcon from '@mui/icons-material/StarHalfSharp';
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';

export const SingleVegetablePage = ({imageVeg,currentId,handleAdd2cart}) => {
  const {id}=useParams()
  console.log("Clicked id = ",id)
  const matchingId=imageVeg.find((matchid)=>{
        return (matchid.id===id)
       }
      )
  return (
    <>
        <div className='single_veg_container'>
          {matchingId && 
            matchingId.itemLists.map((matchVeg)=>{
                   if(matchVeg.mainId===currentId){
                        return <>
                                  <div className='veg_full_image'>
                                      <img src={matchVeg.imagePath} alt={matchVeg.imageAltName} />
                                      <div className='product_checkout'>
                                          <button className='add_to_cart' type='button' onClick={()=>handleAdd2cart(matchVeg)}>ADD TO CART</button>
                                          <button className='buy_now' type='button'>BUY NOW</button>
                                      </div>
                                  </div>
                                  <div className='veg_full_description'>
                                    <h1>{matchVeg.imageDescription}</h1>
                                    <div className='product_rating_area'>
                                        <span className='product_overall_rating'>4.7</span>
                                        <div className='product_rating_star'>
                                          <span><StarSharpIcon className='overall_star_icon'/></span>
                                          <span><StarSharpIcon className='overall_star_icon'/></span>
                                          <span><StarSharpIcon className='overall_star_icon'/></span>
                                          <span><StarSharpIcon className='overall_star_icon'/></span>
                                          <span><StarHalfSharpIcon className='overall_star_icon'/></span>
                                        </div>
                                        <span>& <small>26,503</small>Ratings</span>
                                    </div>
                                    <p>Extra Offers Available</p>
                                    <div className='product_price_detail'>                                       
                                        <p className='product_currentrate'>	&#8377;{matchVeg.currentRate}</p>
                                        <span className='product_previousrate'>&#8377;{matchVeg.previousRate}</span>
                                        <span className='product_offer_detail'>30% off</span>
                                    </div>
                                    <div className='product_available_offer'>
                                      <p>Available offers</p>
                                      <p><span><LocalOfferSharpIcon className='offer_symbol'/></span><strong>Bank Offer</strong> 10% Instant Discount on ICICI Bank Credit Card, up to ₹1000 on orders of ₹5,000 and above<span>T&C</span></p>
                                      <p><span><LocalOfferSharpIcon className='offer_symbol'/></span><strong>Bank Offer</strong> 16% Instant Discount on SBI Bank Debit Card, up to ₹900 on orders of ₹3,000 and above<span>T&C</span></p>
                                      <p><span><LocalOfferSharpIcon className='offer_symbol'/></span><strong>Bank Offer</strong> 33% Instant Discount on Yes Bank Credit Card, up to ₹2300 on orders of ₹7,000 and above<span>T&C</span></p>
                                      <p><span><LocalOfferSharpIcon className='offer_symbol'/></span><strong>Bank Offer</strong> 25% Instant Discount on ICICI Bank Credit Card, up to ₹1600 on orders of ₹6,200 and above<span>T&C</span></p>
                                    </div>
                                     
                                  </div>
                                </>
                              }
                      return;              
            }) 
          }

                {!matchingId &&

                  <>
                    <h1>Element not found</h1>
                  </>
                }
              
        </div>
    </> 
  )
}
