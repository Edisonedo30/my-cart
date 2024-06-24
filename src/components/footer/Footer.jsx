import React, { useContext } from 'react'
import './Footer.css'
import GlobalContext from '../../context/DataContext'

export const Footer = () => {
  const {footerArray}=useContext(GlobalContext)
  console.log("footerArray = ",footerArray)
  return (
    <div className='footer_container'>
        <h2>Here, You can find the answer for your doubt !</h2>
        <div className='footer_list'>
            
                {footerArray.map((foots)=>{
                  return <>
                          <div className='flists'>
                              <h4>{foots.title}</h4>
                              {foots.lists.map((innerFoots)=>{
                                    return <span>{innerFoots}</span>
                                })}
                          </div>
                  </>
                })}
        </div>
        <div className='last_footer'>
            <button type='button'>Region : INDIA</button>
            <button type='button'>Language : ENGLISH</button>
        </div>
    </div>
  )
}
