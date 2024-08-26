
'use client'
import React from 'react'

import ProductSelection from '../components/ProductCard';
import PolicyRegistationStep from '../components/PolicyRegistationStep';

import productBenefit from '@/data/product-benefit';

const ProfuctInfo = () => {
  return (
    <div>
        <div className='grid h-px grid-flow-col grid-cols-2 p-10 cursor-pointer justify-evenly'>
          <ProductSelection key="HN00" />
        </div>
        
    </div>
  )
}

export default ProfuctInfo
