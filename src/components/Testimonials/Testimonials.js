import './Testimonials.scss';

function Testimonials() {
  return ( 
    <>
      <div className="wrapper">
        <h2 className='testimonial__title'>Testimonials</h2>
      </div>
      <article className="testimonial">
        <p className="testimonial__copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel in repudiandae reprehenderit iusto eaque maiores iste, rerum expedita quidem perspiciatis atque natus cumque, magni ipsum voluptas sit saepe vero. Accusamus.</p>
        <h4 className="testimonial__name">First Last name</h4>
        <h5 className="testimonial__role">Student Brainstation</h5>
      </article>
    </>
   );
}

export default Testimonials;