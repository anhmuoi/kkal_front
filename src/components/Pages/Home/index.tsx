import React from 'react'
import Album from './Album'
import HeroSection from './HeroSection'
import News from './News'
import Recomment from './Recomment'


function Home() {
  return (
    <main>
      <HeroSection />
      <Album />
      <Recomment />
      <News />
    </main>
  )
}

export default Home