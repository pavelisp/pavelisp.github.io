import './About.scss';

function About() {
  return ( 
    <section id="about" className="about">
      <div className="about__image">
        <span className="about__graphic-1"></span>
        <span className="about__graphic-2"></span>
      </div>
      <div className="about__text">
        <h2 className="about__title">
          About me
        </h2>
        <p className="about__copy">I am a full-stack web developer, who recently graduated from a bootcamp at BrainStation. Before changing careers I've spent over 10 years working in-house for a cloud backup provider as well as done a lot of freelance work for specialty coffee industry in Toronto.
        </p><p className="about__copy">I first got interested in development when I realized that I can affect things on the internet by tinkering with code. During my design career, I’ve joined numerous development communities of passionate individuals and even became a mentor and a manager of one that had over 200,000 students. 
        </p><p className="about__copy">
        The company I’ve worked for got acquired, and I’ve also become a father. It was the time to decide what I want to do with my career, and development was always my passion.
        </p><p className="about__copy">
        Our lives are touched by technology on a daily basis, I want to be part of the industry that moves the world forward and be part of the change. I want to solve problems, and I want to do it through development.</p>
      </div>
    </section>
   );
}

export default About;