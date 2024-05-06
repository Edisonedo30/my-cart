import React from 'react'
import "../components/MainContentBar.css"
import { LeftSideBar } from '../components/LeftSideBar'
import { Link } from 'react-router-dom'
export const ContentPage = ({searchValue,dummySearch}) => {
    const correctValue=dummySearch.map((dumMaps)=>{
      return(dumMaps.id===searchValue)
  })
  return (
    <>
      <div className='search_page_container'>
        <LeftSideBar/>
        {
          correctValue && correctValue.leafList.map((leaf)=>{
              return <>
                      <div className='search_results_container'>
                        <div className='search_result_lists'>
                          <div className='search_items'>
                            <Link key={leaf.id}><img src={leaf.imagePath} alt={leaf.imageAltName} /></Link>
                              <h3>{leaf.imageDescription}</h3>
                              <div className='search_item_info'>
                                <span><strong>{leaf.currentRate}</strong></span>
                                <small style={{textDecoration:"line-through"}}>{leaf.previousRate}</small>
                              </div>
                          </div>
                        </div>
                      </div> 
                  </>
          })
        }
        
      </div>
    </>
  )
}
