import React, { useContext } from 'react'
import "./Header.css"
import {Link, Outlet } from 'react-router-dom';
import { ProductCatagory } from '../procategory/ProductCatagory';
import { FaShoppingCart } from "react-icons/fa";
import GlobalContext from '../../context/DataContext';

export const Header = () => {
       const {search,handleSearch,searchResults,handleSubmit}=useContext(GlobalContext)
  return (
    <>
      <div className='header_container'> 
          <nav className='header_navbar'>
            <h1 id='logo'>datacontext</h1>
            <div className='search-section'>
              
                <form className='search_form' onSubmit={(e)=>handleSubmit(e)}>
                  
                    <input className='s' type="text" value={search} 
                    onChange={(e)=>handleSearch(e.target.value)} placeholder='Search Items...'/>
                  
                  {/* <span className='search_icon'>
                    <SearchSharpIcon className='search_icon'/>
                  </span> */}

                </form>
              
              <div className='search-results'>
                {
                    searchResults.length ?
                    (searchResults.map(results=>{
                      return <>
                              <div className='search-result-item'>
                                <span>{results.type}</span>
                                <small>Remove</small>
                              </div>
                      </>
                    }))
                    :
                    <>
                      <p></p>
                    </>}
              </div>
            </div>
            

            <div className='profile_information'>
                <div className='add_to_cart'>
                  <Link to="/vegetables/addtocart"><FaShoppingCart className='add_cart_icon'/></Link>
                  <span className='addcart_list'></span>  
                </div>
                <div className='account_list'>Account Lists</div>
                <div className='account_profile'><img src="/images/background/groupfruit2.jpg" alt="" /></div>
            </div>

        </nav>
      </div>

      <ProductCatagory/>
      
    <Outlet/>
    </>
  )
}
