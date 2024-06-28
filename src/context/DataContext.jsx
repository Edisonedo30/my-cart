import React, { createContext } from 'react'
import { useState } from 'react';
import products from '../jsonfile/products.json'
import productType from '../jsonfile/productType.json'
import grocery from "../jsonfile/grocery.json"
import searchItem from "../jsonfile/search.json"
import {footerArray,productRating,randomProduct} from '../data/usingData.js'

const GlobalContext=createContext();

export const DataContext = ({children}) => {
    const [searchHistory,setSearchHistory]=useState([])
    const [search,setSearch]=useState("")
    const [cartList,setCartList]=useState([])
    const [totalAmount,setTotalAmount]=useState(0)
    const [quantityCount,setQuantityCount]=useState(1)
    let amount=0

    const handleCart=(cart)=>{
      let newCartList=cartList.length ? cartList.filter((clist)=>{
         return (clist.mainId !== cart.mainId) }): cartList
      cart.quantity=1
      newCartList=[...newCartList,cart]
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
            }
        }
      })
    }
    const handleProQuantity=(targetValue,targetId)=>{
      targetId.quantity=targetValue
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
    }
  
    const handleSearch=(value)=>{
      setSearch(value)
      let searchResult= searchItem.filter(result=>{  
        return result.item.includes(value)
      })
      setSearchHistory(searchResult)
    }
    const handleCheckout=(checkouts)=>{
      let price=0
      checkouts.forEach((checks)=>{
        checks.newRate=checks.quantity * checks.currentRate 
      })
      checkouts.forEach((amt)=>{
        price =price + amt.newRate
      })
      setTotalAmount(price)
    }
    const handleOrderBtn=()=>{
      if(totalAmount == 0){
        alert("Add some items to the cart...")
      }else{
        let afterOrder=document.querySelector('.order-success')
        let beforeOrder=document.querySelector('.buy-product-container')
        beforeOrder.style.display="none"
        afterOrder.style.display="flex"
        setCartList([])
    }
  }
  return (
    <>
        <GlobalContext.Provider 
            value={{products,productType,search,
                    handleSubmit,setSearch,searchHistory,handleSearchHistory,handleSearch,handleCart,
                    handleCheckout,totalAmount,cartList,grocery,
                    handleTotalAmount,handleOrderBtn,handleProQuantity,
                    quantityCount,footerArray,productRating,randomProduct}}>
            {children}
        </GlobalContext.Provider>
    </>
  )
}

export default GlobalContext;