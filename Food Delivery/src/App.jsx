import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'

function App() {
  
  return (
    <>
       <Navbar/>
       <Hero/>
       <HeadlineCards/>
       <Food/>
       <Category/>
    </>
  )
}

export default App
