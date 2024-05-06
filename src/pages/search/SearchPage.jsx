import React from 'react'
import { ContentPage } from '../ContentPage'
// import { useParams } from 'react-router-dom'
import { Header } from '../components/Header';
export const SearchPage = ({dummySearch,searchValue,imageVeg,handleCurrentId,
  setSearchValue,handleSearchValue,vegName,productCatagory,addCartValue}) => {
      // const {search}=useParams();
      // console.log("id searchValue = ",search);
  
  return (
    <>  
        <Header addCartValue={addCartValue} vegName={vegName} 
                productCatagory={productCatagory} handleSearchValue={handleSearchValue}/>
        <ContentPage dummySearch={dummySearch} searchValue={searchValue} imageVeg={imageVeg} handleCurrentId={handleCurrentId}/>
    </>
  )
}
