import React from 'react'

import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection'
import SkillsSection from '../components/sections/SkillsSection'
const Home = () =>  {
    return (
        <main className="l-main">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ContactSection />
        </main>
    )
}

export default Home;