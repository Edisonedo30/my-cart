import React from 'react'
import '../pages/ContentPage.css'
import "./MainContentBar.css"
import { LeftSideBar } from './LeftSideBar'
import {Product} from './product/Product'

export const MainContentBar = ({productType,products,
  imageVeg,handleCurrentId}) => {
  return (
    <>
        <div className='main_content_container'>
          <LeftSideBar/>
          <Product products={products} productType={productType} imageVeg={imageVeg} handleCurrentId={handleCurrentId}/>
        </div>
    </> 
  )
}
