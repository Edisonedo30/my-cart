import React, { useContext } from 'react'
import "./JuiceSection.css"
import { Link } from 'react-router-dom'
import GlobalContext from '../../context/DataContext'

export const JuiceSection = () => {
    const {grocery,productRating}=useContext(GlobalContext)
    let leafProduct=productRating(grocery,"leaf")
    let drinksProduct=productRating(grocery,"drinks")

  return (
    <div className='vitamin_juice_container'>
        <h2>Healthy Products</h2>
        <div className='drinks'>
            <div className='juice_list_orange'>
                {drinksProduct.map((drink)=>{

                    return <Link className='drinks' key={drink.mainId}><img src={drink.imagePath} alt={drink.imageAltName} />
                            </Link>
            
                })}
                
            </div>
            <div className='juice_description'>
                    <h3>Drinks</h3>
                    <div className='juice_descrip'>
                        <p>Healthy drinks like green tea and fresh smoothies are rich in antioxidants, vitamins, and minerals, boosting immunity and overall well-being.</p>
                        <Link to="/beverages"><button className='view_btn' type='button'>View</button></Link>
                    </div>  
            </div>
        </div>
        <div className='health_leaf'>
            <div className='juice_description_blackcurrent'>
                    <h3>Leafies</h3>
                    <div className='juice_descrip'>
                        <p>Healthy fiber-rich leafy greens, such as spinach and kale, promote digestive health and help maintain a healthy weight and with essential vitamins and minerals.</p>
                        <Link to="/leafies"><button type='button' className='view_btn'>View</button></Link>
                    </div> 
            </div>
            <div className='juice_list_current'>
                {leafProduct.map((leaf)=>{

                    return <Link className='leaf' key={leaf.mainId}><img src={leaf.imagePath} alt={leaf.imageAltName} /></Link>
                    
                })}
            </div>
        </div>
    </div>  
  )
}
