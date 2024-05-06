import React from 'react'
import "./BestProductSection.css"
import { MdKeyboardArrowRight } from "react-icons/md";

export const BestProductSection = () => {
  return (
    <div className='best_product_container'>
        <div className='best_product_header'>
            <h2>Best Products</h2>
            <button className='right_arrow_btn'><MdKeyboardArrowRight className='right_arrow_icon'/></button>
        </div>
        <div className='best_product_list'>
            <div className='best_product_list_item'>
                <img src="images/apple1.jpg" alt="" />
                <p>Name list</p>
                <span>Starts $300</span>
            </div>
            <div className='best_product_list_item'>
                <img src="images/grocery1/biscuit2.png" alt="" />
                <p>NAME LIST</p>
                <span>Starts $300</span>
            </div>
            <div className='best_product_list_item'>
                <img src="images/greenapple.jpg" alt="" />
                <p>Name list</p>
                <span>Starts $300</span>
            </div>
            <div className='best_product_list_item'>
                <img src="images/strawberry2.jpg" alt="" />
                <p>NAME LIST</p>
                <span>Starts $300</span>
            </div>
        </div>
    </div>
  )
}
