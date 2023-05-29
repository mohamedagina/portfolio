import { useState, useRef, useEffect } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { ReactSVG } from 'react-svg';
import { useSelector, useDispatch } from 'react-redux';
import { setInView } from '../../store';
import { useNavigate } from 'react-router-dom';

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
  const { inView, windowWidth } = useSelector(state => ({
    inView: state.inView === 'portfolio',
    windowWidth: state.windowWidth
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const slidesEl = useRef();
  const isBoundarySlide = useRef();

  useEffect(() => {
    if (!slidesEl.current) return;

    const viewProject = () =>
      slidesEl.current.setAttribute(
        'style',
        `transform: translateX(-${
          projectInView * slidesEl.current.clientWidth
        }px)`
      );
    viewProject();

    if (projectInView === 0) isBoundarySlide.current = 'first';
    else if (projectInView === projects.length)
      isBoundarySlide.current = 'last';
    else isBoundarySlide.current = '';

    window.addEventListener('resize', viewProject);

    return () => window.removeEventListener('resize', viewProject);
  }, [projectInView]);

  useEffect(() => {
    if (!inView || windowWidth < 992) return;

    let timeout = '';
    let isScrolling = false;
    const handler = e => {
      if (isScrolling) return;
      let nextSection = 0;
      if (e.deltaY > 0) {
        if (isBoundarySlide.current !== 'last')
          setProjectInView(current => current + 1);
        else nextSection = sections.indexOf('portfolio') + 1;
      }
      if (e.deltaY < 0) {
        if (isBoundarySlide.current !== 'first')
          setProjectInView(current => current - 1);
        else nextSection = sections.indexOf('portfolio') - 1;
      }
      if (nextSection > 0) {
        document
          .querySelector('main')
          .setAttribute(
            'style',
            `transform: translateY(-${nextSection * window.innerHeight}px)`
          );
        navigate(`/#${sections[nextSection]}`);
      }

      isScrolling = true;
      timeout = setTimeout(() => {
        isScrolling = false;
        if (nextSection > 0) {
          dispatch(setInView(sections[nextSection]));
        }
      }, 1200);
    };

    window.addEventListener('wheel', handler);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('wheel', handler);
    };
  }, [inView, windowWidth, dispatch, sections, navigate]);

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
