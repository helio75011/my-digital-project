import React, { useState } from 'react';
import './Acceuil.css';
import Header from '../../components/Section/Header/Header';
import Set from '../../components/Section/Set/Set';
import Statistics from '../../components/Section/Statistics/Statistics';
import WhoWeHelp from '../../components/Section/WhoWeHelp/WhoWeHelp';
import Volunteer from '../../components/Section/Volunteer/Volunteer';
import HowItWorks from '../../components/Section/HowItWorks/HowItWorks';
import Articles from '../../components/Section/Articles/Articles';
import SocialCalendar from '../../components/Section/SocialCalandar/SocialCalandar';
import PricingPlan from '../../components/Section/PricingPlan/PricingPlan';
import Testimonials from '../../components/Section/Testimonials/Testimonials';
import FAQ from '../../components/Section/FAQ/FAQ';
import Contact from '../../components/Section/Contact/Contact';
import Footer from '../../components/Section/Footer/Footer';

const Acceuil = () => {
  const [isCGVModalOpen, setIsCGVModalOpen] = useState(false);
  const [isMentionsModalOpen, setIsMentionsModalOpen] = useState(false);

  const openCGVModal = () => {
    setIsCGVModalOpen(true);
  };

  const closeCGVModal = () => {
    setIsCGVModalOpen(false);
  };

  const openMentionsModal = () => {
    setIsMentionsModalOpen(true);
  };

  const closeMentionsModal = () => {
    setIsMentionsModalOpen(false);
  };

  return (
    <div className='body-landing'>
      <Header />
      <div className='body-acceuil'>
        <Set />
        <Statistics />
        <WhoWeHelp />
        <Volunteer />
        <HowItWorks />
        <SocialCalendar />
        <Articles />
        <PricingPlan />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer 
          isCGVModalOpen={isCGVModalOpen}
          openCGVModal={openCGVModal}
          closeCGVModal={closeCGVModal}
          isMentionsModalOpen={isMentionsModalOpen}
          openMentionsModal={openMentionsModal}
          closeMentionsModal={closeMentionsModal}
        />
      </div>
    </div>
  );
};

export default Acceuil;