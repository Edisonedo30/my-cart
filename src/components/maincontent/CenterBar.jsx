import React from 'react'
import "./CenterBar.css"
import { FeatureSection } from './FeatureSection'
import { BestProductSection } from './BestProductSection'
import { LowestPriceProduct } from './LowestPriceProduct'
import { JuiceSection } from './JuiceSection'
import {Footer} from '../footer/Footer'

export const CenterBar = () => {
  return (
    <div className='centerbar_container'>
        <FeatureSection/>
        <BestProductSection/>
        <LowestPriceProduct/>
        <JuiceSection/>
        <Footer/>
    </div>
  )
}
