import React, { useState, useEffect } from 'react';
import { BsTruck } from 'react-icons/bs';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import './header.css';
import Navbar from '../Navbar/Navbar';
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="top__nav">
            <div className="top__header">
              <div className="top__header__left">
                <div className="delivery">
                  <BsTruck />
                  <span>Free Delivery</span>
                </div>
                <div className="speraion"></div>
                <span className="anchor-span">
                  <a href="#">Return Policy</a>
                </span>
              </div>

              <div className="top__header__right">
                <span className="anchor-span">
                  <a href="">Login</a>
                </span>
                <div className="social__links">
                  <span>Follow us</span>
                  <ul>
                    <li className="social__link">
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li className="social__link">
                      <a href="">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li className="social__link">
                      <a
                        href="
                                        "
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li className="social__link">
                      <a href="">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
