import { ReactSVG } from 'react-svg';
import { pcImage, sectionDecoration, sideDots, purpleRomb } from '../../assets';
import { GoChevronRight } from 'react-icons/go';

import { RubberText } from '../';

import './Hero.css';
import { HashLink } from 'react-router-hash-link';

export const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="section-content">
        <ReactSVG src={pcImage} className="hero-image" />
        <div className="hero-description">
          <h1>
            <RubberText text="Front-End Web Developer" />
          </h1>

          <p>
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </p>

          <HashLink to="/#about" className="nav-link">
            About me <GoChevronRight />
          </HashLink>
        </div>
      </div>

      <ReactSVG src={sectionDecoration} className="hero-decoration" />
      <div className="side-dots">
        <img src={sideDots} alt="" />
      </div>

      <div className="purple-romb">
        <img src={purpleRomb} alt="" />
      </div>
    </section>
  );
};
