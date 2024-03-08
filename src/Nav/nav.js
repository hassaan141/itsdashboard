 import { Link } from "react-router-dom";
 import './nav.styles.css';

// const Nav = ({ title }) => { // Removed type annotation for title

//   return (
//     <nav className="NavWrapper">
//       <div className="MenuHeader">
//         <Link to="/" className="AirMatrixLogo">
//           <img src="" alt="Girl in a jacket"/>
//         </Link>
//       </div>
//       <div className="NavBody">
//         <div>
//           <Link to="/" className={`NavItem ${title === "Dashboard" ? "active" : ""}`}>
//             {/* Dashboard Icon */}
//             <span>Dashboard</span>
//           </Link>
//           {/* Additional links */}
//         </div>
//         {/* Logout link */}
//       </div>
//     </nav>
//   );
// };

// export default Nav;

import React from 'react'

export default function nav() {
  return (
    <nav className="NavWrapper">
       <div className="MenuHeader">
         navbar
        
       </div>
     </nav>
  )
}
