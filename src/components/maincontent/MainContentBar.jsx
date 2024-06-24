import React from 'react'
// import '../pages/ContentPage.css'
import "./MainContentBar.css"
import {Product} from '../product/Product'

export const MainContentBar = ({productType,products,
  imageVeg,handleCurrentId}) => {
  return (
    <>
        <div className='main_content_container'>
          <Product products={products} productType={productType} imageVeg={imageVeg} handleCurrentId={handleCurrentId}/>
        </div>
    </> 
  )
}
