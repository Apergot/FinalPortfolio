import React from 'react'
import AboutImage from '../../assets/about.jpg'

export default function AboutSection() {
    return (
        <section className="about section " id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src={AboutImage} alt="" />
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">I'm Alejandro</h2>
                        <p className="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
                    </div>                                   
                </div>
        </section>
    )
}
