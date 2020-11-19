import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import mailIlustration from '../../assets/contact.svg'
import Swal from 'sweetalert2';
import BounceLoader from 'react-spinners/DotLoader'

const ContactSection = () => {

    const [sending, setSending] = useState(false);

    function clearInputs () {
        document.getElementById('contactForm').reset();
    }

    function sendEmail(e){
        e.preventDefault();
        setSending(true);
        emailjs.sendForm(process.env.REACT_APP_API_EMAILJS_ID, '', e.target, process.env.REACT_APP_API_EMAILJS_USERID)
        .then((result) => {
            setSending(false);
            clearInputs();
            Swal.fire({
                icon: 'success', 
                title: 'Mail sent successfully!', 
                text: `I'll contact you as soon as possible`,
                background:'#0E2431',
                confirmButtonColor:'#4070F4',
                confirmButtonText:'Continue...'
                });
        }, (error) => {
            setSending(false);
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
            <p className="section-subtitle">If you want to get in touch, talk about a project or just to say hi, don't hesitate to contact me using below form either.</p>
            <div className="contact__container bd-grid" onSubmit={sendEmail}>
                <div className="contact__img">
                    <img src={mailIlustration} alt=""/>
                </div>
                <form className="contact__form" id="contactForm">
                    <input type="text" placeholder="Name" name="user_name" className="contact__input" id="nameForm" required/>
                    <input type="mail" placeholder="Email" name="user_email" className="contact__input" id="mailForm" required/>
                    <textarea name="message" cols="0" rows="10" className="contact__input" id="descForm" required></textarea>
                    <div className="button__contact_container">
                        <button type="submit" className="contact__button button">{sending ? <BounceLoader size={20} color={'#fff'}/> : 'Send'}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactSection;