import React from 'react';
import './nav.styles.css'; 

// Your SVG imports
import AirMatrixLogo from './logo/airmatrix-logo.svg';
import DashboardIcon from './logo/dashboard.svg';
import AnalysisIcon from './logo/analysis.svg';
import ProfileIcon from './logo/profile.svg';
import SettingsIcon from './logo/settings.svg';
import LogoutIcon from './logo/logout.svg'; 

const NavItem = ({ icon }) => (
  <div className="NavItem">
    <img src={icon} alt='' />
  </div>
);

const Nav = () => {
  return (
    <nav className="NavWrapper">
      <div className="MenuHeader">
       <NavItem icon={AirMatrixLogo}  />
      </div>
      <div className="NavBody">
        <NavItem icon={DashboardIcon}  />
        <NavItem icon={AnalysisIcon}  />
        <NavItem icon={ProfileIcon}  />
        <NavItem icon={SettingsIcon} />
        <div className="Logout">
          <img src={LogoutIcon} alt="Logout" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;