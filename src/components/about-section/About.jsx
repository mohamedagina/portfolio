import './About.css';
import { RubberText, Section } from '../';
import {
  myImage,
  purpleRomb2,
  darkCube,
  sectionDecoration2
} from '../../assets';
import { ReactSVG } from 'react-svg';

const jobTitles = [
  'Software Engineer',
  'Frontend Developer',
  'React Developer'
];

const aboutMe = [
  'Bachelor of Engineering - BE, Computers and Control Systems Engineering 2016 - 2021.',
  'Problem solver, well-organized person, loyal employee with high attention to detail. Fan of Anime, video games, and coding of course.',
  'Interested in the entire frontend spectrum and working on ambitious projects with interesting people.'
];
export const About = () => {
  return (
    <Section id="about">
      <div className="about-content section-full">
        <div className="column">
          <h2 className="main-heading">
            <RubberText text="Hi, I'm Mohamed Web Developer" />
          </h2>

          <div className="job-titles">
            {jobTitles.map(job => (
              <span key={job}>{job}</span>
            ))}
          </div>
        </div>

        <div className="column">
          {aboutMe.map((about, i) => (
            <p key={i}>{about}</p>
          ))}
        </div>

        <img className="my-image" src={myImage} alt="" />
        <img className="about-romb" src={purpleRomb2} alt="" />
        <img className="about-cube" src={darkCube} alt="" />
        <ReactSVG
          src={sectionDecoration2}
          className="side-decoration decoration-right"
        />
      </div>
    </Section>
  );
};
