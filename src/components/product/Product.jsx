import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Product.css'
import GlobalContext from '../../context/DataContext'

export const Product = () => {
  const {grocery}=useContext(GlobalContext)
  const {id}=useParams()
    let dd=grocery.itemLists.filter(filly=>{
      return (filly.type === id) || (filly.rating === id)
    })
    const fullItem=[];
    for(let i=0;i<dd.length;i++){
      let ran=Math.floor(Math.random()* dd.length)
      fullItem.push(dd[ran])
    }
    console.log("fullItem = ",fullItem)
    
  return (
    <>
      <div className='product-collection-container'>
          <h3 className='product-type'>{id}</h3>
          <div className='pro2x001'>
          {fullItem.map((product)=>{
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
