import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Product.css'
import GlobalContext from '../../context/DataContext'
export const Product = () => {

  const {products,productType}=useContext(GlobalContext)
  
  const {id}=useParams()
    const matchingId=products.find(match=>{
        return (match.type).toLowerCase() === id
    })

  return (
    <>
      <div className='product-list-container'>
        {matchingId.listOfProducts.map((list)=>{
          return <>
                    <div className='product-category'>
                      <h3>{list.name}</h3>
                      <div className='product-collection'>
                        {productType.map(mappy=>{
                          return (list.name === mappy.id)?
                          (
                            mappy.itemLists.map(happy=>{
                              return <>
                                        <Link to={`${happy.vegetableId}/${happy.mainId}`} className='collection-info'>
                                          <img src={happy.imagePath} alt="" />
                                          <span>{happy.previousRate}</span>
                                        </Link>
                                    </>
                            })):
                            <><h1>{productType.id}</h1></>
                        })}
                      </div>
                    </div>
                  </>
        })}
      </div>
    </>
  )
}
