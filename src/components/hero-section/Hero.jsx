import { ReactSVG } from 'react-svg';
import { pcImage, sectionDecoration, sideDots, purpleRomb } from '../../assets';
import { GoChevronRight } from 'react-icons/go';

import { RubberText, HashLink, Section } from '../';

import './Hero.css';

export const Hero = () => {
  return (
    <Section id="home">
      <div className="hero-content section-full">
        <ReactSVG src={pcImage} className="hero-image" />
        <div className="hero-description">
          <h1 className="main-heading">
            <RubberText text="Front-End Web Developer" />
          </h1>

          <p>
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </p>

          <HashLink to="#about" className="nav-link purple">
            About me <GoChevronRight />
          </HashLink>
        </div>
      </div>

      <ReactSVG
        src={sectionDecoration}
        className="side-decoration decoration-left"
      />
      <div className="side-dots">
        <img src={sideDots} alt="" />
      </div>

      <div className="purple-romb">
        <img src={purpleRomb} alt="" />
      </div>
    </Section>
  );
};
