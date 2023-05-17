import { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './SectionSwitch.css';

export const SectionSwitch = ({ sections }) => {
  const [selectorOffset, setSelectorOffset] = useState(0);
  const { hash: activeSection } = useLocation();
  const selectorEl = useRef();
  const switchEl = useRef();

  useEffect(() => {
    const offset =
      switchEl.current.querySelector(`.section-link[href$='${activeSection}']`)
        ?.offsetTop || 0;
    setSelectorOffset(offset);
  }, [activeSection]);

  const handleMouseEnter = e => {
    selectorEl.current.style.top = e.target.offsetTop + 'px';
  };
  const handleMouseLeave = () => {
    selectorEl.current.style.top = selectorOffset + 'px';
  };

  return (
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
  );
};
