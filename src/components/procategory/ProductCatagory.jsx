import React, { useContext } from 'react'
import "./ProductCatagory.css"
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import GlobalContext from '../../context/DataContext';

export const ProductCatagory = () => {
  
  const {products}=useContext(GlobalContext)

  return (
    <>
      <div className="catagory_container">
        {products.map((mapCatagory)=>{
          return <>
                  <div className='catagory_list'>
                      <div className="product_catagory">
                        <ProductList key={mapCatagory.id} mapCatagory={mapCatagory}/>
                      </div>           
                    <div className='product_catagory_list'>
                          <div className='product_catagory_innerlist'>
                              {mapCatagory.listOfProducts.map((listCatagoryMap)=>{
                                return  <>
                                          <CategoryList key={listCatagoryMap.id} listCatagoryMap={listCatagoryMap} mapCatagory={mapCatagory}/>
                                        </>
                              })}
                          </div>
                      </div>
                </div>
            </>
        })}
      </div>
    </>
  )
}
