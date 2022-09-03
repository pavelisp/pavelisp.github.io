import './Testimonials.scss';
import testimonailData from '../../assets/data/testimonials.js';


function Testimonials({name, role, testimonial}) {
  return ( 
    <>
      <div className="wrapper">
        <h2 className='testimonial__title'>Testimonials</h2>
      </div>
      { testimonailData.map(({testimonial, name, role}) =>  (<article key={name} className="testimonial">
        <p className="testimonial__copy">{testimonial}</p>
        <h4 className="testimonial__name">{name}</h4>
        <h5 className="testimonial__role">{role}</h5>
      </article>))}
    </>
   );
}

export default Testimonials;