import React, { useContext } from 'react'
import "./SingleProductList.css"
import { Link, useParams } from 'react-router-dom'
import { LeftSideBar } from '../../maincontent/LeftSideBar'
import GlobalContext from '../../../context/DataContext'

export const SingleProductList = () => {
    const {grocery}=useContext(GlobalContext)
    const {id}=useParams()
    let productItem=grocery.itemLists.filter(items=>{
      return items.catagoryId === id.replaceAll(" ","")
    })

  return (
        <>
          <div className='single_product_container'>
            <LeftSideBar/>
            <div className='product-category'>
                  <h3>{id}</h3>
                  <div className='product-collection'>            
                        {productItem.map(item=>{
                          return <Link to={`/${item.type}/${item.catagoryId}/${item.mainId}`}                 className='collection-info' key={item.mainId}>
                                      <img src={item.imagePath} alt="" />
                                      <div className='collection-description'>
                                        <span className='product-name'>{item.imageDescription}</span>
                                        <span className='product-price'>&#8377;{item.currentRate}</span>
                                      </div>
                                    </Link> 
                                
                        })}
                  </div>
                </div>  
            </div>   
        </> 
  )
}
