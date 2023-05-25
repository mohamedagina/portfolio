import { ReactSVG } from 'react-svg';
import { pcImage, sectionDecoration, sideDots, purpleRomb } from '../../assets';
import { GoChevronRight } from 'react-icons/go';

import { RubberText } from '../';

import './Hero.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section id="home" className="hero-section">
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

          <Link to="/#about" className="nav-link purple">
            About me <GoChevronRight />
          </Link>
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
    </section>
  );
};
