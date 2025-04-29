import React from 'react'
import { TabsDemo } from '../components/TabDemo'
import { NavbarDemo } from '../components/NavbarDemo'

const Features = () => {
  return (
    <>
    <NavbarDemo/>
    <h1 className='text-center text-4xl font-bold mb-10'>Here are our some of the solutions we provide</h1>
    <TabsDemo/>
    </>
  )
}

export default Features
