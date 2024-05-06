import React from 'react'
import "./TopSideOffer.css"
export const TopSideOffer = () => {
  return (
    <div className='topsidebar_container'>
        <div className='topside_highoffer'>
          <img src="images/FruitItem.jpeg" alt="" />
          <div className='topsideoffer_carousel'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='topside_toolowoffer'>one</div>
        <div className='topside_lowoffer'>ddd</div>
        {/* <div className='topside_toomediumoffer'>ss</div> */}
        {/* <div className='topside_mediumoffer'>ss</div> */}
    </div>
  )
}
