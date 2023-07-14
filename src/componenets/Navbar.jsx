import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import imageNav from '../images/imageNavbar.png'


const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleCLickOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <div className="navbar-mobile">
        <div>

        <a href="/">
          <div className="logo">
            <img src="src\images\ImageNavbar.png" alt="logo card rental" />
          </div>
        </a>
        <div className="navbar-mobile__open">
          <button onClick={handleCLickOpenNav}>||</button>
        </div>
        <nav
          className={`navbar-mobile__container ${openNav ? "open-nav" : ""} `}
          >
          <div>
            <div className="navbar-mobile__close">
              <button onClick={handleCLickOpenNav}>X</button>
            </div>
            <ul className={`navbar-mobile__ul  `}>
              <li>
                <div>
                  <NavLink onClick={handleCLickOpenNav} to={"/"}>Home</NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink onClick={handleCLickOpenNav} to={"/about"}>About</NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink onClick={handleCLickOpenNav} to={"/models"}>Models</NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink onClick={handleCLickOpenNav} to={"/testimonials"}>Testimonials</NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink onClick={handleCLickOpenNav} to={"/ourTeam"}>Our Team</NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink onClick={handleCLickOpenNav} to={"/contact"}>Contact</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
          </div>
      </div>

      <div className="navbar">
        <a href="/">
          <div className="logo navbar__logo">
            <img src={imageNav} alt="logo card rental" />
          </div>
        </a>
        <nav className="navbar__container">
          <ul className="navbar__ul">
            <li>
              <div>
                <NavLink to={"/"}>Home</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to={"/about"}>About</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to={"/models"}>Models</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to={"/testimonials"}>Testimonials</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to={"/ourTeam"}>Our Team</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to={"/contact"}>Contact</NavLink>
              </div>
            </li>
          </ul>
        </nav>
        <div className="navbar__buttons">
          <a className="navbar__buttons__sing-in" href="#">Sign In</a>
          <a className="navbar__buttons__register" href="#">Register</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
