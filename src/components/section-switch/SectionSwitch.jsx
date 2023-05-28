import { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import './SectionSwitch.css';

import { useSelector, useDispatch } from 'react-redux';
import { setInView } from '../../store';

import { HashLink } from '../';

export const SectionSwitch = ({ sections }) => {
  const dispatch = useDispatch();

  const [selectorOffset, setSelectorOffset] = useState(0);
  const [nextSection, setNextSection] = useState(1);
  const { hash: activeSection } = useLocation();

  const { windowWidth, inView: currentSection } = useSelector(state => state);
  const navigate = useNavigate();
  const selectorEl = useRef();
  const switchEl = useRef();

  useEffect(() => {
    const offset =
      switchEl.current.querySelector(`.section-link[href$='${activeSection}']`)
        ?.offsetTop || 0;
    setSelectorOffset(offset);

    const currentIndex = sections.indexOf(activeSection.substring(1));
    const next =
      currentIndex === -1
        ? 1
        : currentIndex === sections.length - 1
        ? 0
        : currentIndex + 1;
    setNextSection(next);
  }, [activeSection, sections]);

  useEffect(() => {
    if (windowWidth < 992) return;

    const mainEl = document.querySelector('main');
    let isScrolling = false;
    let timeoutID = '';
    const handleScroll = e => {
      if (!e.deltaY || isScrolling) return;

      const currentIndex = sections.indexOf(currentSection);
      let nextIndex = 0;
      if (e.deltaY > 0)
        nextIndex =
          currentIndex === sections.length - 1
            ? currentIndex
            : currentIndex === -1
            ? 1
            : currentIndex + 1;
      else nextIndex = currentIndex < 1 ? 0 : currentIndex - 1;

      if (nextIndex !== currentIndex) {
        isScrolling = true;
        mainEl.setAttribute(
          'style',
          `transform: translateY(-${nextIndex * window.innerHeight}px)`
        );
        navigate(`/#${sections[nextIndex]}`);
        timeoutID = setTimeout(() => {
          isScrolling = false;
          dispatch(setInView(sections[nextIndex]));
        }, 1200);
      }
    };

    document.addEventListener('wheel', handleScroll);

    return () => {
      clearTimeout(timeoutID);
      document.removeEventListener('wheel', handleScroll);
    };
  }, [navigate, currentSection, sections, windowWidth]);

  useEffect(() => {
    const viewSection = () => {
      const mainEl = document.querySelector('main');

      if (window.innerWidth < 992) {
        mainEl.setAttribute('style', `transform: translateY(0);`);

        if (!activeSection) return;

        dispatch(setInView(activeSection.substring(1)));
        const sectionInView = document.querySelector(activeSection);

        if (sectionInView)
          sectionInView.scrollIntoView({
            block: 'nearest',
            inline: 'start'
          });

        return;
      }
      const currentIndex = sections.indexOf(activeSection.substring(1));
      mainEl.setAttribute(
        'style',
        `transform: translateY(-${currentIndex * window.innerHeight}px)`
      );
    };

    viewSection();

    window.addEventListener('resize', viewSection);
    return () => window.removeEventListener('resize', viewSection);
  }, [activeSection, sections, dispatch]);

  const handleMouseEnter = e => {
    selectorEl.current.style.top = e.target.offsetTop + 'px';
  };
  const handleMouseLeave = () => {
    selectorEl.current.style.top = selectorOffset + 'px';
  };

  return (
    <>
      <div className="section-switch" ref={switchEl}>
        <div
          className="selector"
          ref={selectorEl}
          style={{ top: selectorOffset + 'px' }}
        ></div>
        {sections.map((section, index) => (
          <HashLink
            to={`#${section}`}
            key={section}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="section-link"
          >
            {index <= 9 ? `0${index}` : index}
          </HashLink>
        ))}
      </div>
      <HashLink to={`#${sections[nextSection]}`} className="section-scroll">
        {nextSection !== 0 ? (
          <>
            <GoChevronLeft className="scroll-arrow down" />{' '}
            <span>Scroll Down</span>
          </>
        ) : (
          <>
            <span>Back To Top</span>{' '}
            <GoChevronRight className="scroll-arrow up" />
          </>
        )}
      </HashLink>
    </>
  );
};
