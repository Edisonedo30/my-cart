import React, { useContext } from 'react'
import "./SingleProductList.css"
import { Link, useParams } from 'react-router-dom'
import { LeftSideBar } from '../../maincontent/LeftSideBar'
import GlobalContext from '../../../context/DataContext'

export const SingleProductList = () => {

    const {grocery}=useContext(GlobalContext)
    const {id}=useParams()
    console.log(id.replaceAll(' ',''))
    let fills=grocery.itemLists.filter(filly=>{
      return filly.catagoryId === id.replaceAll(" ","")
    })

  return (
        <>
          <div className='single_product_container'>
            <LeftSideBar/>
            <div className='product-category'>
                  <h3>{id}</h3>
                  <div className='product-collection'>            
                        {fills.map(happy=>{
                          return <>
                                    <Link to={`/${happy.type}/${happy.catagoryId}/${happy.mainId}`} className='collection-info'>
                                      <img src={happy.imagePath} alt="" />
                                      <div className='product-details'>
                                        <span className='product-name'>{happy.imageDescription}</span>
                                        <span className='product-price'>&#8377;{happy.currentRate}</span>
                                      </div>
                                    </Link> 
                                </>
                        })}
                  </div>
                </div>  
            </div>   
        </> 
  )
}
