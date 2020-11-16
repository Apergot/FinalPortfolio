import React, { Component } from 'react'

class ContactSection extends Component {
    render() {
        return (
            <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact__container bd-grid">
                    <form className="contact__form">
                        <input type="text" placeholder="Name" className="contact__input"/>
                        <input type="mail" placeholder="Email" className="contact__input"/>
                        <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
                        <input type="button" value="Send" className="contact__button button"/>
                    </form>
                </div>
            </section>
        )
    }
}

export default ContactSection;