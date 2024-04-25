import React from 'react'
import './Acceuil.css'
import Header from '../../components/Header/Header'
import Set from '../../components/Section/Set/Set'
import Statistics from '../../components/Section/Statistics/Statistics'
import WhoWeHelp from '../../components/Section/WhoWeHelp/WhoWeHelp'
import Volunteer from '../../components/Section/Volunteer/Volunteer'
import HowItWorks from '../../components/Section/HowItWorks/HowItWorks'
import Articles from '../../components/Section/Articles/Articles'
import SocialCalendar from '../../components/Section/SocialCalandar/SocialCalandar'
import PricingPlan from '../../components/Section/PricingPlan/PricingPlan'
import Testimonials from '../../components/Section/Testimonials/Testimonials'
import FAQ from '../../components/Section/FAQ/FAQ'
import Contact from '../../components/Section/Contact/Contact'
import Footer from '../../components/Section/Footer/Footer'
const Acceuil = () => {
  return (
    <div className='body-landing'>
        <Header />
        <Set />
        <Statistics />
        <WhoWeHelp />
        <Volunteer />
        <HowItWorks />
        <Articles />
        <SocialCalendar />
        <PricingPlan />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
    </div>
  )
}

export default Acceuil