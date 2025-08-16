import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HeroSlider/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
      <Footer/>
      
     
    </div>
  )
}

export default Home
