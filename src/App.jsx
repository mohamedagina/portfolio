import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, Header, About, Skills, Portfolio } from './components';

function App() {
  const { hash: sectionID, key } = useLocation();

  useEffect(() => {
    if (!sectionID) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionInView = document.querySelector(sectionID);
    if (sectionInView)
      sectionInView.scrollIntoView({
        block: 'nearest',
        inline: 'start'
      });
  }, [key, sectionID]);
  return (
    <>
      <Header />
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
