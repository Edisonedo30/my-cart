import React from 'react'
import "./FeatureSection.css"
export const FeatureSection = () => {
  return (
    <div className='feature_container'>
        <div className='best_deal_feature'>
            <h2>Best Deal Items</h2>
            <div className='best_deal_list'>
                <img src="images/grocery1/biscuit1.png" alt="" />
                <img src="images/grocery1/biscuit2.png" alt="" />
                <img src="images/grocery1/biscuit3.png" alt="" />
                <img src="images/grocery1/biscuit4.png" alt=""/>
            </div>
            <button className='see_more_btn'>See More</button>
        </div>
        <div className='top_sale_feature'>
            <h2>Top Sale Products</h2>
            <div className='top_sale_list'>
                <img src="images/grocery1/milk1.avif" alt="" />
                <img src="images/grocery1/milk2.avif" alt="" />
                <img src="images/grocery1/milk3.avif" alt="" />
                <img src="images/grocery1/milk5.avif" alt="" />
                <img src="images/grocery1/milk4.avif" alt="" />
                <img src="images/grocery1/milk1.avif" alt="" />
            </div>
            <button className='see_more_btn'>See More</button>
        </div>
    </div>
  )
}


