import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Product.css'
import GlobalContext from '../../context/DataContext'

export const Product = () => {
  const {grocery,randomProduct}=useContext(GlobalContext)
  const {id}=useParams()
  let productCollection=randomProduct(grocery,id)

  return (
    <>
      <div className='product-collection-container'>
          <h3 className='product-type'>{id}</h3>
          <div className='pro2x001'>
          {productCollection.map((product)=>{
            return <div className='pro2xx1' key={product.mainId}>
                          <Link to={`${product.catagoryId}/${product.mainId}`} className='pro2xxx1'>
                            <img className='pro2xxx1-img' src={product.imagePath}
                             alt={product.imageAltName} />
                             <div className='pro2xxx1-details'>
                              <span className='product-info-name'>{product.imageDescription}</span>
                              <span className='product-info-price'>&#8377;{product.currentRate}</span>
                             </div>
                          </Link>
                        </div>    
            
            })}
        </div>
      </div>
    </>
  )
}
