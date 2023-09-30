import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import heroImage from '../../static/images/hero.png';
import starImg from '../../static/images/Star 3.png';
import './hero.css';
const Heroj = () => {
  return (
    <section id="home">
      <div className="hero__section">
        <div className="overlay"></div>
        <div className="hero__img">
          <img src={heroImage} alt="hero-img" />
        </div>
        <div className="star__img">
          <img src={starImg} alt="star-img" />
        </div>
        <div className="hero__text__conatiner">
          <div className="hero__text">
            <span>Fresh</span>
            <span>2023</span>
            <span>looks</span>
          </div>
        </div>
        <div className="see__more">
          <button>
            See more <FiArrowUpRight />
          </button>
        </div>
        <div className="product__info">
          <span>Oregon jacket</span>
          <span>$ 220</span>
        </div>
      </div>
    </section>
  );
};

export default Heroj;
