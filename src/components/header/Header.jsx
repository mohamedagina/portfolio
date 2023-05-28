import './Header.css';
import { AppLogo, HashLink } from '../';
import { SectionSwitch } from '../section-switch/SectionSwitch';

export const Header = ({ sections }) => (
  <header className="app-header">
    <div className="fixed-nav left-nav">
      <HashLink to="/#about">
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
