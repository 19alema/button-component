import React from 'react'
import './navbar.css'
import {
  FaBars
} from 'react-icons/fa'
function Navbar({ sidebar }) {
  
    return (
      <nav className={sidebar? "showSidebar": "hideSidebar"}>
        <h2>
          <span>dev</span>
          Challenge.io
        </h2>
            <ul>
              <li>colors</li>
              <li>Typography</li>
              <li>spaces</li>
              <li>Buttons</li>
              <li>Inputs</li>
              <li>Grid</li>
        </ul>
        <p>Code by 
          <span> @alema </span>
        </p>
       </nav>
   )
 }
export default Navbar