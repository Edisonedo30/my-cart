import React from 'react'
import "./JuiceSection.css"

export const JuiceSection = () => {
  return (
    <div className='vitamin_juice_container'>
        <h2>Vitamin C Juice</h2>
        <div className='vitamin_orange'>
            <div className='juice_list_orange'>
                <img src="images/juice/orangejuice1.avif" alt="" />
                <img src="images/juice/orangejuice3.jpg" alt="" />
                <img src="images/juice/orangejuice2.jpg" alt="" />
            </div>
            <div className='juice_description'>
                    <h3>Orange Juice</h3>
                    <div className='juice_descrip'>
                        <div className='juice_descrip_text'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ratione ad. Repudiandae, corporis alias. At fugit quo eum omnis repellendus.</p>
                            <button type='button' className='view_btn'>View</button>
                        </div>
                        <img src="images/orange2.jpg" alt="" />
                    </div>  
            </div>
        </div>
        <div className='vitamin_blackcurrent'>
            <div className='juice_description_blackcurrent'>
                    <h3>BlackCurrent Juice</h3>
                    <div className='juice_descrip blacky'>
                        <img src="images/blackcurrentfruit.jpg" alt="" />
                        <div className='juice_descrip_text'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ratione ad. Repudiandae, corporis alias. At fugit quo eum omnis repellendus.</p>
                            <button type='button' className='view_btn'>View</button>
                        </div>
                    </div> 
            </div>
            <div className='juice_list_current'>
                <img src="images/juice/blackcurrent2.avif" alt="" />
                <img src="images/juice/blackcurrent1.avif" alt="" />
                <img src="images/juice/blackcurrent1.avif" alt="" />
            </div>
        </div>
        <div className='vitamin_gova'>
            <div className='juice_list_gova'>
                <img src="images/juice/govajuice2..webp" alt="" />
                <img src="images/juice/govajuice3.webp" alt="" />
                <img src="images/juice/govajuice3.webp" alt="" />
            </div>
            <div className='juice_description'>
                    <h3>Gova Juice</h3>
                    <div className='juice_descrip'>
                        <div className='juice_descrip_text'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ratione ad. Repudiandae, corporis alias. At fugit quo eum omnis repellendus.</p>
                            <button type='button' className='view_btn'>View</button>
                        </div>
                        <img src="images/gova1.jpg" alt="" />
                    </div>
            </div>
        </div>
    </div>  
  )
}
