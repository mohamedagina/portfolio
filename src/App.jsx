import { useEffect, useCallback } from 'react';
import { Hero, Header, About, Skills, Portfolio, Contact } from './components';

import { useDispatch } from 'react-redux';
import { updateWindowWidth, setIsScrolling } from './store';

import { useLocation } from 'react-router-dom';

const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
function App() {
  const dispatch = useDispatch();
  const { hash: sectionID } = useLocation();

  const scrollToSection = useCallback(
    (onMobile = true) => {
      const mainEl = document.querySelector('main');

      if (window.innerWidth < 992) {
        if (!onMobile) return;

        mainEl.setAttribute('style', `transform: translateY(0);`);

        if (!sectionID) return;
        const sectionInView = document.querySelector(sectionID);

        if (sectionInView)
          sectionInView.scrollIntoView({
            block: 'nearest',
            inline: 'start'
          });
      } else {
        const currentIndex = sections.indexOf(sectionID.substring(1));
        mainEl.setAttribute(
          'style',
          `transform: translateY(-${currentIndex * window.innerHeight}px)`
        );
      }
    },
    [sectionID]
  );

  useEffect(() => {
    const handleResize = () => {
      dispatch(updateWindowWidth(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  useEffect(() => {
    const section = sectionID.substring(1);
    let sectionIndex = sections.indexOf(section);
    if (sectionIndex === -1) sectionIndex = 0;

    scrollToSection(false);
    dispatch(setIsScrolling(true));

    const timeoutID = setTimeout(() => {
      dispatch(setIsScrolling(false));
    }, 1200);

    window.addEventListener('resize', scrollToSection);
    return () => {
      clearTimeout(timeoutID);
      return () => window.removeEventListener('resize', scrollToSection);
    };
  }, [sectionID, dispatch, scrollToSection]);

  return (
    <>
      <Header sections={sections} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio sections={sections} />
        <Contact />
      </main>
    </>
  );
}

export default App;
