import './Skills.scss';

function Skills() {
  return ( 
    <section className="skills">
      <div className="wrapper">
        <h2 className="skills__title">Skills &amp; Experience</h2>
        <div className="skills__lists">
        <ul className="skills__list">
          <li className="skills__list-item">JavaScript</li>
          <li className="skills__list-item">NodeJS</li>
          <li className="skills__list-item">React</li>
          <li className="skills__list-item">Express</li>
          <li className="skills__list-item">MySQL</li>
        </ul>
        <ul className="skills__list">
          <li className="skills__list-item">Agile Development</li>
          <li className="skills__list-item">DOM APIs &amp; Web APIs</li>
          <li className="skills__list-item">GatsbyJS</li>
          <li className="skills__list-item">User Authentication</li>
          <li className="skills__list-item">OAuth</li>
        </ul>
        <ul className="skills__list">
          <li className="skills__list-item">Git &amp; Github</li>
          <li className="skills__list-item">Jest</li>
          <li className="skills__list-item">SASS</li>
          <li className="skills__list-item">CSS</li>
          <li className="skills__list-item">HTML</li>
        </ul>
        </div>
        
      </div>
    </section>
   );
}

export default Skills;