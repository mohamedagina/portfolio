import { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import './SectionSwitch.css';

export const SectionSwitch = ({ sections }) => {
  const [selectorOffset, setSelectorOffset] = useState(0);
  const [nextSection, setNextSection] = useState(1);
  const { hash: activeSection } = useLocation();
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
            smooth
          >
            {index <= 9 ? `0${index}` : index}
          </HashLink>
        ))}
      </div>
      <HashLink
        to={`/#${sections[nextSection]}`}
        className="section-scroll"
        smooth
      >
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
