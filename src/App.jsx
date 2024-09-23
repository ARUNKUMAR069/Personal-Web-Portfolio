import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout1 from './components/Layout1'
import { Layout2 } from './components/Layout2'
import { Navbar1 } from './components/Navbar1'
import Layout3 from './components/Layout3'
import Heading from './components/Heading'

function App() {


  return (
    <div className='bg-gradient-to-br from-[#282a36] via-[#6272a4] to-[#44475a]'>
      <Navbar1 />
      <Layout1 />
      <Heading title='My Skills'/>
      <Layout2 />
      <Heading title='My Projects' />
      <Layout3 />
      <Heading title='Services I provide' />
      <Heading title='About me' />

    </div>
  )
}

export default App
