import React, { useContext } from 'react'
import "./FeatureSection.css"
import { Link } from 'react-router-dom'
import GlobalContext from '../../context/DataContext'

export const FeatureSection = () => {
    const {grocery,productRating}=useContext(GlobalContext)
    let dealsProduct=productRating(grocery,"deals")
    let topSaleProduct=productRating(grocery,"topsale")
    
  return (
    <div className='feature_container'>
        <div className='best_deal_feature'>
            <h2>Best Deal Items</h2>
            <div className='best_deal_list'>
                {dealsProduct.map((product)=>{

                    return <Link to={`/${product.type}/${product.catagoryId}/${product.mainId}`}             className='best_deal_img' key={product.mainId}><img src={product.imagePath} 
                    alt={product.imageAltName} /></Link>

                })}
            </div>
            <Link to="/deals" className='see_more_deal_btn'>See More</Link>
        </div>
        <div className='top_sale_feature'>
            <h2>Top Sale Products</h2>
            <div className='top_sale_list'>
                {topSaleProduct.map((product)=>{

                    return <Link to={`/${product.type}/${product.catagoryId}/${product.mainId}`}  className='top_sale_img' key={product.mainId}><img src={product.imagePath} alt={product.imageAltName} /></Link>
                            
                    })} 
            </div>
            <Link to="/topsale" className='see_more_sale_btn'>See More</Link>
        </div>
    </div>
  )
}


