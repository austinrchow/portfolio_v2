import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../App.css';
import logo from '../images/AC.png'

function Nav() {
  return (
    <nav className = "nav">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
       >
      <img src={logo} id="logoStyle" alt="logo" />
       </Link>


       <ul className="nav-links">
       <Link
         activeClass="active"
         to="about"
         spy={true}
         smooth={true}
         offset={0}
         duration={500}
         className="link"
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
         >
           Experience
         </Link>

         <Link
           activeClass="active"
           to="work"
           spy={true}
           smooth={true}
           offset={0}
           duration={500}
          >
            Work
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
           >
             Contact
           </Link>

       </ul>
    </nav>

  )
}

export default Nav;
