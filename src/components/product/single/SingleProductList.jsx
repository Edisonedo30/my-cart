import React, { useContext } from 'react'
import "./SingleProductList.css"
import { Link, useParams } from 'react-router-dom'
import { LeftSideBar } from '../../LeftSideBar'
import GlobalContext from '../../../context/DataContext'

export const SingleProductList = () => {

    const {productType}=useContext(GlobalContext)
    const {id}=useParams()
    const matchingId=productType.find(match=>{
        return (match.id) === id
    })

  return (
        <>
          <div className='single_product_container'>
            <LeftSideBar/>
            {matchingId &&
              <div className='product-category'>
                      <h3>{matchingId.id}</h3>
                      <div className='product-collection'>            
                            {matchingId.itemLists.map(happy=>{
                              return <>
                                        <Link to={`/${happy.type}/${happy.vegetableId}/${happy.mainId}`} className='collection-info'>
                                          <img src={happy.imagePath} alt="" />
                                          <span>{happy.previousRate}</span>
                                        </Link> 
                                    </>
                            })}
                      </div>
                </div>
                }   
            </div>   
        </> 
  )
}
