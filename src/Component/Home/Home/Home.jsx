import React from 'react'
import ServicesAkwad from '../ServicesSection/ServicesAkwad'
import Challenges from '../Challenges/Challenges'
import InterestSystems from '../interestSystems/interestSystems'
import AboutAkwad from '../AboutAkwad/AboutAkwad'
import OurCustomers from '../Ourcustomers/OurCustomers'
import HeroSection from '../HeroSection/HeroSection'

export default function Home() {
  return <>
        <HeroSection/>
{/* Services section container */}
<div className="w-full bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <ServicesAkwad/>
  </div>
</div>
{/* Challenges section خارج container علشان الخلفية تاخد الشاشة */}
<Challenges/>
<InterestSystems></InterestSystems>
<AboutAkwad></AboutAkwad>
<OurCustomers></OurCustomers>
  </>
}
