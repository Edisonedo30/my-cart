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
          {products.map((proList)=>{
            return <div className='catagory_list' key={proList.id}>
                                    <div className="product_catagory">
                                        <ProductList proList={proList}/>
                                    </div>           
                                    <div className='product_catagory_list'>
                                        
                                        {proList.listOfProducts.map((lists)=>{
                                            return <CategoryList key={lists.id} lists={lists} proList={proList}/>
                                        })}
                                       
                                    </div>
                    </div>
        })}
      </div>
    </>
  )
}
