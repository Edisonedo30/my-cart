import React, { useContext } from 'react'
import "./BestProductSection.css"
import GlobalContext from '../../context/DataContext'
import { Link } from 'react-router-dom'

export const BestProductSection = () => {

    const {grocery}=useContext(GlobalContext)
    let bestProducts=grocery.itemLists.filter((listType)=>{
        return listType.rating === "bests"
    })

  return (
    <div className='best_product_container'>
       
        <div className='best_product_list'>
            {bestProducts.map((product)=>{
                return <div className='best_product_list_item' key={product.mainId}>
                            <Link to={`/${product.type}/${product.catagoryId}/${product.mainId}`}  className='best_product_img'><img src={product.imagePath} alt={product.imageAltName} /></Link>
                        </div>
            })}
            
        </div>

        <div className='best_product_description'>
            <p>Discover convenience at your doorstep with our online grocery service. From fresh produce to pantry essentials, we've got you covered. Shop from the comfort of your home and enjoy speedy delivery. Experience hassle-free grocery shopping with us today!</p>
            <Link to="/best">
                <button type="button" className='visit_btn'>Visit More</button>
            </Link>
        </div>

    </div>
  )
}
