import React, { createContext } from 'react'
import { useState } from 'react';
import products from '../jsonfile/products.json'
import productType from '../jsonfile/productType.json'

const GlobalContext=createContext();

export const DataContext = ({children}) => {

    const [search,setSearch]=useState("")
    const [searchResults,setSearchResults]=useState([])
    const [cartList,setCartList]=useState([])
    const [totalAmount,setTotalAmount]=useState(0)
    
    const handleCart=(cart)=>{
      cart.checked=true
      const newCartList=[...cartList,cart]
      setCartList(newCartList)
    }
  
    const handleSubmit=(e)=>{
      e.preventDefault();
    }
  
    const handleSearch=(value)=>{
      setSearch(value)
      const filtered=products.filter(filter=>{
        return filter.type.toLowerCase().includes(search)
      })
      setSearchResults(filtered)
    }
  
    const handleCheckout=(amount)=>{
      console.log("Amount = ",amount)
      amount=amount+totalAmount
      return setTotalAmount(amount)
    }
    
  return (
    <>
        <GlobalContext.Provider 
            value={{products,productType,search,searchResults,
                handleSubmit,handleSearch,handleCart,
                handleCheckout,totalAmount,cartList}}>

            {children}

        </GlobalContext.Provider>
    </>
  )
}

export default GlobalContext;