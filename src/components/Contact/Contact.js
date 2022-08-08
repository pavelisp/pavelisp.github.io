import './Contact.scss';

function Contact() {
  return ( 
    <section id="contact" className='contact'>
      <h2 className='contact__title'>Get in Touch</h2>
      <h3 className="contact__text">Thank you for visiting, let's chat!</h3>
      <p className="contact__link">EMAIL: <a href="mailto:isp.pavel@gmail.com">isp.pavel@gmail.com</a></p>
      <p className="contact__link">LINKEDIN: <a href="https://www.linkedin.com/in/pavelisp/">linkedin.com/in/pavelisp</a></p>
      <p className="contact__link">GITHUB: <a href="https://github.com/pavelisp">github.com/pavelisp</a></p>
    </section>
   );
}

export default Contact;