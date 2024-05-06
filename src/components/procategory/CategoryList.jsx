import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({listCatagoryMap,mapCatagory}) => {
  return (
    <>
        <Link key={listCatagoryMap.id} to={`/${(mapCatagory.type).toLowerCase()}/${listCatagoryMap.name}`}>{listCatagoryMap.name}</Link>
    </>
  )
}
export default CategoryList