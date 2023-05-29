import { Section } from '../';
import './Contact.css';
import { ReactSVG } from 'react-svg';
import { sectionDecoration, mapImg } from '../../assets';

import { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { useSelector } from 'react-redux';

export const Contact = () => {
  const globeEl = useRef();
  const containerEl = useRef();
  const [globeWidth, setGlobeWidth] = useState(0);
  const windowWidth = useSelector(state => state.windowWidth);

  useEffect(() => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.4;
  }, []);

  useEffect(() => {
    const container = containerEl.current;
    if (windowWidth > 992) setGlobeWidth(container.clientWidth / 2);
    else setGlobeWidth(container.clientWidth);
  }, [windowWidth]);

  return (
    <Section id="contact">
      <div ref={containerEl} className="contact-content section-full">
        <Globe
          ref={globeEl}
          globeImageUrl={mapImg}
          backgroundColor="#00000000"
          showAtmosphere={false}
          width={globeWidth}
          height={globeWidth * 0.8}
        />

        <div className="contact-info">
          <p>
            What would you do if you had a software expert available at your
            fingertips?
          </p>

          <p>
            Want to start new project? Or just say hey.
            <br />
            You can also follow me on{' '}
            <a
              href="https://www.instagram.com/mohamedag1na/"
              target="_blank"
              rel="noreferrer noopener"
              className="gold contact-link"
            >
              instagram
            </a>
            .
          </p>

          <a className="contact-mail" href="mailto:mohamedagina001@gmail.com">
            mohamedagina001@gmail.com
          </a>
        </div>
      </div>

      <ReactSVG
        src={sectionDecoration}
        className="side-decoration decoration-left"
      />
    </Section>
  );
};
