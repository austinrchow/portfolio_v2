import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../App.css';

function Nav() {
  const navStyle = {
    color: 'white'
  }
  return (
    <nav className = "nav">
    <Link
      to="home"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
     >
       <h3>Logo</h3>
     </Link>


     <ul className="nav-links">
     <Link
       activeClass="active"
       to="about"
       spy={true}
       smooth={true}
       offset={0}
       duration={500}
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
