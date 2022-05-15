import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjFour} from './Data'

function Products() {
  return (
    <>
    <HeroSection {...homeObjFour} />
    <Pricing />

    </>
  )
}

export default Products