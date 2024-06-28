import React, { useContext } from 'react'
import "./Header.css"
import {Link, Outlet } from 'react-router-dom';
import { ProductCatagory } from '../procategory/ProductCatagory';
import { FaShoppingCart } from "react-icons/fa";
import GlobalContext from '../../context/DataContext';

export const Header = () => {
       const {search,cartList,searchHistory,
        handleSearchHistory,handleSearch,handleSubmit}=useContext(GlobalContext)
  return (
    <>
    <div className='header-section'>
      <div className='header_container'> 
          <nav className='header_navbar'>
            <Link to="/" id='logo'>Grocery</Link>
            <div className='search-section'>
                <form className='search_form' onSubmit={(e)=>handleSubmit(e)}>
                    <input className='s' type="text" value={search} 
                    onChange={(e)=>handleSearch(e.target.value)} placeholder='Search Items...'/>
                </form>
            
                {search.length ? <>
                       <div className='search-results'>
                          {searchHistory.map(results=>{
                            return <div className='search-result-item' key={results.id} onClick={()=>handleSearchHistory()}>
                                      <Link to={`/${results.item}`} ><span>{results.item}</span></Link>
                                    </div>
                          })}
                        </div>
                    </>
                    :
                      <>

                      </>
                  }
              
            </div>
            

            <div className='profile_information'>
                <div className='add_to_cart'>
                  <Link to="/addtocart"><FaShoppingCart className='add_cart_icon'/></Link>
                      {cartList.length ? <span className='cart_count'>{cartList.length}</span> : ""}
                </div>
                <div className='account_profile'><img src="/images/background/groupfruit2.jpg" alt="" /></div>
            </div>
            
        </nav>
      </div>

      <ProductCatagory/>
    </div>
    <Outlet/>
    </>
  )
}
