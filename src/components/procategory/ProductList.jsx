import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({proList}) => {
  return (
    <>
        <Link to={`/${(proList.type).toLowerCase()}`}><h3 className='product_catagory_name'>
        {proList.type}</h3></Link>
    </>
  )
}

export default ProductList