import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({lists,proList}) => {
  
  return (
    <>
        <Link key={lists.id} to={`/${(proList.type).toLowerCase()}/${(lists.name).trim().toLowerCase()}`} className='catagory-name-list'>{lists.name}</Link>
    </>
  )
}
export default CategoryList