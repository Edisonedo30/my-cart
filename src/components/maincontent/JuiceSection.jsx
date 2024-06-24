import React, { useContext } from 'react'
import "./JuiceSection.css"
import { Link } from 'react-router-dom'
import GlobalContext from '../../context/DataContext'

export const JuiceSection = () => {
    const {grocery}=useContext(GlobalContext)
    let leafProduct=grocery.itemLists.filter((listType)=>{
        return listType.ratingType === "leaf"
    })
    let drinksProduct=grocery.itemLists.filter((listType)=>{
        return listType.ratingType === "drinks"
    })
  return (
    <div className='vitamin_juice_container'>
        <h2>Healthy Products</h2>
        <div className='drinks'>
            <div className='juice_list_orange'>
                {drinksProduct.map((drink)=>{
                    return <>
                            <Link className='drinks'><img src={drink.imagePath} alt={drink.imageAltName} />
                            </Link>
                        </>
                })}
                
            </div>
            <div className='juice_description'>
                    <h3>Drinks</h3>
                    <div className='juice_descrip'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ratione ad. Repudiandae, corporis alias. At fugit quo eum omnis repellendus.</p>
                        <Link to="/beverages"><button className='view_btn' type='button'>View</button></Link>
                    </div>  
            </div>
        </div>
        <div className='health_leaf'>
            <div className='juice_description_blackcurrent'>
                    <h3>Leafies</h3>
                    <div className='juice_descrip'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ratione ad. Repudiandae, corporis alias. At fugit quo eum omnis repellendus.</p>
                        <Link to="/leafies"><button type='button' className='view_btn'>View</button></Link>
                    </div> 
            </div>
            <div className='juice_list_current'>
                {leafProduct.map((leaf)=>{
                    return <>
                           <Link className='leaf'><img src={leaf.imagePath} alt={leaf.imageAltName} /></Link>
                    </>
                })}
            </div>
        </div>
    </div>  
  )
}
