import React from 'react'
import emailjs from 'emailjs-com';
import mailIlustration from '../../assets/contact.svg'
import Swal from 'sweetalert2';

const ContactSection = () => {

    function clearInputs () {
        document.getElementById('nameForm').placeholder = 'Name';
        document.getElementById('mailForm').placeholder = 'Email';
        document.getElementById('descForm').placeholder = '';
    }

    function sendEmail(e){
        e.preventDefault();
        clearInputs();
        emailjs.sendForm('service_mgng1bs', '', e.target, 'user_80a1D6stjrVHsuEUgISE4')
        .then((result) => {
            Swal.fire({
                icon: 'success', 
                title: 'Mail sent successfully!', 
                text: `I'll contact you as soon as possible`,
                background:'#0E2431',
                confirmButtonColor:'#4070F4',
                confirmButtonText:'Continue...'
                });
        }, (error) => {
            clearInputs();
            Swal.fire({
                icon:'error',
                title: 'Oooopss!', 
                text: `Something went wrong, pls do me a favour and tell me at apergot95@gmail.com`,
                background:'#0E2431',
                confirmButtonColor:'#4070F4',
                confirmButtonText:'Continue to site...'
            });
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
                    <input type="text" placeholder="Name" name="user_name" className="contact__input" id="nameForm"/>
                    <input type="mail" placeholder="Email" name="user_email" className="contact__input" id="mailForm"/>
                    <textarea name="message" cols="0" rows="10" className="contact__input" id="descForm"></textarea>
                    <input type="submit" value="Send" className="contact__button button"/>
                </form>
            </div>
        </section>
    )
}

export default ContactSection;