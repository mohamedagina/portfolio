import './Header.css';
import { AppLogo } from '../';
import { HashLink } from 'react-router-hash-link';
import { SectionSwitch } from '../section-switch/SectionSwitch';

const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
export const Header = () => (
  <header className="app-header">
    <div className="fixed-nav left-nav">
      <HashLink to="#about">
        <AppLogo />
      </HashLink>
    </div>

    <div className="fixed-nav right-nav">
      <HashLink to="#contact" className="nav-btn">
        Contact
      </HashLink>
      <SectionSwitch sections={sections} />
    </div>
  </header>
);
