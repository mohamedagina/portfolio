import './Header.css';
import { AppLogo } from '../';
import { Link } from 'react-router-dom';
import { SectionSwitch } from '../section-switch/SectionSwitch';

const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
export const Header = () => (
  <header className="app-header">
    <div className="fixed-nav left-nav">
      <Link to="/#about">
        <AppLogo />
      </Link>
    </div>

    <div className="fixed-nav right-nav">
      <Link to="/#contact" className="nav-btn">
        Contact
      </Link>
      <SectionSwitch sections={sections} />
    </div>
  </header>
);
