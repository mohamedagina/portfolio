import { useState, useRef, useEffect } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { ReactSVG } from 'react-svg';
import { useSelector, useDispatch } from 'react-redux';
import { setIsScrolling } from '../../store';
import { useNavigate, useLocation } from 'react-router-dom';

import { RubberText, HashLink, Section } from '../';
import './Portfolio.css';

import { sectionDecoration2, sphereLG, sphereMD, sphereSM } from '../../assets';

const projects = [
  {
    id: '0',
    title: 'Portfolio',
    description: 'Online portfolio for frontend developer',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    demo: 'https://portfolio-mohamedagina.vercel.app/',
    code: 'https://github.com/mohamedagina/portfolio',
    img: './assets/macbook-portfolio.png',
    category: 'Personal portfolio',
    icon: './assets/logo.svg'
  },

  {
    id: '1',
    title: 'Archrete',
    description: 'Online portfolio for real estate company',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    demo: 'https://archrete-mohamedagina.vercel.app/',
    img: './assets/macbook-archrete.png',
    category: 'Enterprise portfolio',
    icon: './assets/archrete.svg'
  }
];

export const Portfolio = ({ sections }) => {
  const [projectInView, setProjectInView] = useState(0);
  const { isScrolling } = useSelector(state => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hash: sectionInView } = useLocation();

  const slidesEl = useRef();

  useEffect(() => {
    if (!slidesEl.current) return;
    let timeout = '';
    const viewProject = () => {
      slidesEl.current.setAttribute(
        'style',
        `transform: translateX(-${
          projectInView * slidesEl.current.clientWidth
        }px)`
      );

      dispatch(setIsScrolling(true));
      timeout = setTimeout(() => {
        dispatch(setIsScrolling(false));
      }, 1200);
    };
    viewProject();

    window.addEventListener('resize', viewProject);

    return () => {
      window.removeEventListener('resize', viewProject);
      clearTimeout(timeout);
    };
  }, [projectInView, dispatch]);

  useEffect(() => {
    const inView = sectionInView === '#portfolio';
    if (!inView || isScrolling || window.innerWidth < 992) return;

    const handler = e => {
      const direction = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;
      const shouldGoX =
        projectInView + direction >= 0 &&
        projectInView + direction <= projects.length;

      if (shouldGoX) {
        setProjectInView(current => current + direction);
      } else {
        const nextSection = sections.indexOf('portfolio') + direction;
        navigate(`/#${sections[nextSection]}`);
      }
    };

    window.addEventListener('wheel', handler);
    return () => window.removeEventListener('wheel', handler);
  }, [sections, navigate, isScrolling, sectionInView, projectInView]);

  return (
    <Section id="portfolio">
      <div className="section-full portfolio-wrapper">
        <div ref={slidesEl} className="portfolio-content">
          <div className="portfolio-slide">
            <div className="portfolio-summary">
              <h2 className="portfolio-heading">
                <RubberText text="Portfolio & Previous Projects" />
              </h2>

              <p>
                I have built various different projects to fit different aspects
                of the client&apos;s business. If you want to see more examples
                of my work than the ones showcased in this site, please{' '}
                <HashLink to="#contact" className="gold weight-md">
                  contact me!
                </HashLink>
              </p>

              <button
                className="nav-link purple"
                onClick={() => setProjectInView(1)}
              >
                See Projects <GoChevronRight />
              </button>
            </div>

            <img src={sphereLG} alt="" className="sphere-lg" />
            <img src={sphereMD} alt="" className="sphere-md" />
            <img src={sphereSM} alt="" className="sphere-sm" />
          </div>

          {projects.map(project => (
            <div key={project.id} className="portfolio-slide project">
              <img
                className="project-img"
                src={project.img}
                alt={project.title + ' screenshot'}
              />
              <div className="project-details">
                <div>
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title main-heading">
                    <RubberText text={project.title} />
                  </h3>
                </div>

                <p>{project.description}</p>
                <p className="project-technologies">
                  <span>Built with: </span>
                  {project.technologies.join(', ')}
                </p>

                <div className="view-project">
                  <div className="project-links">
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="nav-link "
                      >
                        View The Code <GoChevronRight />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="nav-link gold"
                      >
                        Visit The App <GoChevronRight />
                      </a>
                    )}
                  </div>

                  <img
                    className="project-icon"
                    src={project.icon}
                    alt={project.title + ' icon'}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ul className="project-selectors">
        <li>
          <button
            onClick={() => projectInView && setProjectInView(0)}
            className={`project-selector ${
              !projectInView ? 'project-inview' : ''
            }`}
          >
            <span />
          </button>
        </li>

        {projects.map((project, index) => (
          <li key={project.id}>
            <button
              className={`project-selector ${
                projectInView === index + 1 ? 'project-inview' : ''
              }`}
              onClick={() =>
                index + 1 !== projectInView && setProjectInView(index + 1)
              }
            >
              <span />
            </button>
          </li>
        ))}
      </ul>

      <ReactSVG
        src={sectionDecoration2}
        className="side-decoration decoration-right"
      />
    </Section>
  );
};
