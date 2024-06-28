import React, { useContext } from 'react'
import './ContentPage.css'
import GlobalContext from '../context/DataContext'
import { Link } from 'react-router-dom'
export const ContentPage = () => {
  const {searchResults}=useContext(GlobalContext)
      
  return (
    <>
      <div className='search_page_container'>
        {
          searchResults && searchResults.map((results)=>{
              return <>
                          <div className='search_items'>
                            <Link to={`${results.catagoryId}/${results.mainId}`} key={results.mainId} className='search-items-link'><img className='search-item-img' src={results.imagePath} 
                              alt={results.imageAltName} />
                                <div className='search_item_info'>
                                  <h3>{results.imageDescription}</h3>
                                  <span><strong>&#8377;{results.currentRate}</strong></span>
                                  <small style={{textDecoration:"line-through"}}>{results.previousRate}</small>
                                </div>
                              </Link>
                          </div>
                  </>
          })
        }
      </div>
    </>
  )
}
