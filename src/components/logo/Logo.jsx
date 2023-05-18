import { appLogo } from '../../assets';
import { ReactSVG } from 'react-svg';

import './Logo.css';

export const AppLogo = () => (
  <div className="app-logo">
    <ReactSVG src={appLogo} />
    DVLPR
  </div>
);
