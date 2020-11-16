import React from 'react'

import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
    return (
        <main className="l-main">
            <HomeSection />
            <AboutSection />
            <ContactSection />
        </main>
    )
}
