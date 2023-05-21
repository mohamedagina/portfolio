import './Skills.css';
import { RubberText } from '../';
import { sectionDecoration } from '../../assets';

import { ReactSVG } from 'react-svg';

const skills = [
  { id: 1, title: 'JavaScript', logo: './assets/js.svg' },
  { id: 2, title: 'React', logo: './assets/react.svg' },
  { id: 3, title: 'Redux', logo: './assets/redux.svg' },
  { id: 4, title: 'HTML', logo: './assets/html.svg' },
  { id: 5, title: 'CSS', logo: './assets/css.svg' },
  { id: 6, title: 'Git', logo: './assets/git.svg' }
];
export const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-full skills-content">
        <div className="skills-text">
          <span className="skills-slogan">
            A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
          </span>
          <h2 className="main-heading">
            <RubberText text="Skills & Experience" />
          </h2>
          <p>
            The main area of expertise is front end development (client side of
            the web).
          </p>
          <p>
            HTML, CSS, JS, building small and medium web applications with Vue
            or React, custom plugins, features, animations, and coding
            interactive layouts. I have also full-stack developer experience
            with one of the most popular open source CMS on the web - WordPress
          </p>
          <p>
            Visit my{' '}
            <a
              href="https://www.linkedin.com/in/mohamed-agina"
              target="_blank"
              rel="noreferrer noopener"
              className="external-link"
            >
              Linkedin
            </a>{' '}
            for more details.
          </p>
        </div>

        <div className="skills-logos">
          {skills.map(skill => (
            <div key={skill.id} className="skill-logo">
              <img src={skill.logo} alt={skill.title} />
              {skill.title}
            </div>
          ))}
        </div>
      </div>

      <ReactSVG
        src={sectionDecoration}
        className="side-decoration decoration-left"
      />
    </section>
  );
};
