import React from 'react'
import emailjs from 'emailjs-com';
import mailIlustration from '../../assets/contact.svg'

const ContactSection = () => {

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_mgng1bs', 'contact_form', e.target, 'user_80a1D6stjrVHsuEUgISE4')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        });
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>
            <div className="contact__container bd-grid" onSubmit={sendEmail}>
                <div className="contact__img">
                    <img src={mailIlustration} alt=""/>
                </div>
                <form className="contact__form">
                    <input type="text" placeholder="Name" name="user_name" className="contact__input"/>
                    <input type="mail" placeholder="Email" name="user_email" className="contact__input"/>
                    <textarea name="message" id="" cols="0" rows="10" className="contact__input"></textarea>
                    <input type="submit" value="Send" className="contact__button button"/>
                </form>
            </div>
        </section>
    )
}

export default ContactSection;