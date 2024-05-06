import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown } from "react-icons/md";

const ProductList = ({mapCatagory}) => {
  return (
    <>
        <img src="images/tomoto1.jpg" alt=""/>
        <Link to={`/${(mapCatagory.type).toLowerCase()}`}><h3 className='product_catagory_name'>
        {mapCatagory.type}</h3></Link>
        <MdKeyboardArrowDown id='arrow_down'/>
    </>
  )
}

export default ProductList