import React, { useContext } from 'react'
import './Footer.css'
import GlobalContext from '../../context/DataContext'

export const Footer = () => {
  const {footerArray}=useContext(GlobalContext)
  return (
    <div className='footer_container'>
        <h2>Here, You can find the answer for your doubt !</h2>
        <div className='footer_list'>
            
                {footerArray.map((foots,index)=>{

                  return <div className='flists' key={foots.id}>
                              <h4>{foots.title}</h4>
                              {foots.lists.map((innerFoots,index)=>{
                                    return <span key={index}>{innerFoots}</span>
                                })}
                          </div>
                  
                })}
        </div>
        <div className='last_footer'>
            <button type='button'>Region : INDIA</button>
            <button type='button'>Language : ENGLISH</button>
        </div>
    </div>
  )
}
