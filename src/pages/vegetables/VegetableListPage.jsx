import React from 'react'
import "./VegetableListPage.css"
import { Link, useParams } from 'react-router-dom'

export const VegetableListPage = ({imageVeg,handleCurrentId}) => {
    const {id}=useParams()
    console.log(id)
    const matchingId=imageVeg.find((match)=>{
        return (match.id)===id}
    )
  return (
    <>
    <div className='vegetable_page_container'>
        <div className='filter'>
            
        </div>
        <div className='vegetable_content_list'>
            {matchingId &&
                matchingId.itemLists.map((matchedItem)=>{
                    
                    return <>
                            <div className='vegetable_list'>
                              <Link  key={matchedItem.mainId} to={`/vegetables/${matchedItem.vegetableId}/${matchedItem.vegetableId}page`} onClick={()=>handleCurrentId(matchedItem.mainId)}><img src={matchedItem.imagePath} alt={matchedItem.imageAltName} /></Link>
                                <h3>{matchedItem.imageDescription}</h3>
                                <div className='vegetable_info'>
                                    <span><strong>${matchedItem.currentRate}</strong></span>
                                    <small style={{textDecoration:"line-through"}}>${matchedItem.previousRate}</small>
                                </div>
                            </div>
                            </>
                })
                }
                {!matchingId &&

                    <>
                        <h1>Page not found</h1>
                    </>
                    
                }   
        </div>
    </div>
    </>
  )
}
