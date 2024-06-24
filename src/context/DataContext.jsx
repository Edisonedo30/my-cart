import React, { createContext } from 'react'
import { useState } from 'react';
import products from '../jsonfile/products.json'
import productType from '../jsonfile/productType.json'
import grocery from "../jsonfile/grocery.json"
import searchItem from "../jsonfile/search.json"
import footerArray from '../data/usingData.js'

const GlobalContext=createContext();

export const DataContext = ({children}) => {
    const [searchHistory,setSearchHistory]=useState([])
    const [search,setSearch]=useState("")
    const [cartList,setCartList]=useState([])
    const [totalAmount,setTotalAmount]=useState(0)
    const [quantityCount,setQuantityCount]=useState(1)
    let amount=0
    const handleCart=(cart)=>{
      cart.checked=true
      cart.quantity=quantityCount;
      const newCartList=[...cartList,cart]
      setCartList(newCartList)  
      handleTotalAmount(newCartList)
    }

    const handleSearchHistory=()=>{
      let resultList=document.querySelector('.search-results')
      resultList.style.display='none'
      setSearch("")
    }

    const handleTotalAmount=(newAmount)=>{
      newAmount.forEach((total)=>{
        for (let key in total) {
            if(key === "currentRate"){
              amount += quantityCount
              setTotalAmount(amount)
            }
        }
      })
    }
    const handleProQuantity=(targetValue,targetId)=>{
      targetId.quantity=targetValue
      setQuantityCount(targetId.quantity)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
    }
  
    const handleSearch=(value)=>{
      setSearch(value)
      let dumResult= searchItem.filter(dum=>{  
        return dum.item.includes(value)
      })
      setSearchHistory(dumResult)
    }
    const handleCheckout=(amount)=>{
      console.log("Amount = ",amount)
      amount=amount+totalAmount
      return setTotalAmount(amount)
    }
    const handleOrderBtn=()=>{
      let afterOrder=document.querySelector('.order-success')
      let beforeOrder=document.querySelector('.buy-section')
      beforeOrder.style.display="none"
      afterOrder.style.display="flex"
      setCartList([])
  }
  return (
    <>
        <GlobalContext.Provider 
            value={{products,productType,search,
                    handleSubmit,setSearch,searchHistory,handleSearchHistory,handleSearch,handleCart,
                    handleCheckout,totalAmount,cartList,grocery,
                    handleTotalAmount,handleOrderBtn,handleProQuantity,
                    quantityCount,footerArray}}>
            {children}
        </GlobalContext.Provider>
    </>
  )
}

export default GlobalContext;