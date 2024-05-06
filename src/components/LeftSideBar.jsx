import React from 'react'
import "./LeftSideBar.css"
import { MdKeyboardArrowDown } from "react-icons/md";

export const LeftSideBar = () => {
  return (
    <div className='leftsidebar_container'>
      <h2>FILTER</h2>
      <div className='leftside_filter_list'>
        <div className='filter_name_list'>
          <h3>CAPACITY</h3>
          <span><MdKeyboardArrowDown/></span>
        </div>
        <div className='filter_catagory_list'>
          <div className='filter_catagory'>
              <input type="checkbox" className='check_list' />
              <p>6 kg Below</p>
          </div>
          <div className='filter_catagory'>
              <input type="checkbox" className='check_list' />
              <p>6 kg Below</p>
          </div>
          <div className='filter_catagory'>
              <input type="checkbox" className='check_list' />
              <p>6 kg Below</p>
          </div>
          <div className='filter_catagory'>
              <input type="checkbox" className='check_list' />
              <p>6 kg Below</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
