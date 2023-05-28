import { useEffect } from 'react';
import { Hero, Header, About, Skills, Portfolio } from './components';

import { useDispatch } from 'react-redux';
import { updateWindowWidth } from './store';

const sections = ['home', 'about', 'skills', 'portfolio'];
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
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
        <Portfolio />
      </main>
    </>
  );
}

export default App;
