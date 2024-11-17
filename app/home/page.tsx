import { AiChatbot } from '@/components/AIChatbot'
import { Features } from '@/components/Features'
import Footer from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { Header } from '@/components/Navbar'
import React from 'react'
//This is main page

const page = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <AiChatbot/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default page