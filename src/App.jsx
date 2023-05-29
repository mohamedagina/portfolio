import { useEffect } from 'react';
import { Hero, Header, About, Skills, Portfolio, Contact } from './components';

import { useDispatch } from 'react-redux';
import { updateWindowWidth, setInView } from './store';

const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInView(window.location.hash.substring(1)));
    const handleResize = () => {
      dispatch(updateWindowWidth(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);
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
