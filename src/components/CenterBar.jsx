import React from 'react'
import "./CenterBar.css"
import { TopSideOffer } from './TopSideOffer'
import { FeatureSection } from './FeatureSection'
import { BestProductSection } from './BestProductSection'
import { LowestPriceProduct } from './LowestPriceProduct'
import { JuiceSection } from './JuiceSection'
export const CenterBar = () => {
  return (
    <div className='centerbar_container'>
        <TopSideOffer/>
        <FeatureSection/>
        <BestProductSection/>
        <LowestPriceProduct/>
        <JuiceSection/>
    </div>
  )
}
