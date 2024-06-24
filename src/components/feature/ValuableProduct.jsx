import React, { useContext } from 'react'
import "../product/Product.css"
import GlobalContext from '../../context/DataContext'
import { Link, useParams } from 'react-router-dom'

export const ValuableProduct = () => {
    const {grocery}=useContext(GlobalContext)
    const {id}=useParams()
    let dealProduct=grocery.itemLists.filter((dealing)=>{
        return dealing.rating === id
    })
    console.log("dealProduct = ",dealProduct)
  return (
    <>
        <div className='product-collection-container'>
          <h3 className='product-type'>Best Deal Product</h3>
          <div className='pro2x001'>
          {dealProduct.map((product)=>{
            return <>
                        <div className='pro2xx1'>
                          <Link to={`${product.catagoryId}/${product.mainId}`} className='pro2xxx1'>
                            <img className='pro2xxx1-img' src={product.imagePath}
                             alt={product.imageAltName} />
                             <div className='pro2xxx1-details'>
                              <span className='product-info-name'>{product.imageDescription}</span>
                              <span className='product-info-price'>&#8377;{product.currentRate}</span>
                             </div>
                          </Link>
                        </div>    
                    </>
                    })}
                </div>
            </div>
    </>
  )
}
