import React, { useContext } from 'react'
import "./LowestPriceProduct.css"
import GlobalContext from '../../context/DataContext'

export const LowestPriceProduct = () => {
    const {grocery}=useContext(GlobalContext)
    let lowestProduct=grocery.itemLists.filter((listType)=>{
        return listType.offerType === "lower"
    })
  return (
    <div className='lowest_price_container'>
        <h2>Lowest Price List</h2>
        <div className='lowest_price_product'>
            {lowestProduct.map((lowPrice)=>{
                return <div className='lowest_price_product_item' key={lowPrice.mainId}>
                            <img src={lowPrice.imagePath} alt={lowPrice.imageAltName} />
                            <div className='lowest_price_list'>
                                <p>Lowest</p>
                                <span><strong>50% OFF</strong></span>
                            </div>
                        </div>
            })}
            
        </div>
    </div>
  )
}
