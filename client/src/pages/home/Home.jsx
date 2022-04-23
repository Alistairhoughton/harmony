import React from 'react';
import homeStyles from './home.css';
import Slider from '../../components/slider/slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="home-cta-container">
          <p className="home-cta-title">Discover your perfect band member</p>
          <button className="home-cta-button">Lets go!</button>
        </div>
        <div className="hero-container">
          <p className="home-cta-title hero-title">Join fellow musicians to create the next big thing</p>
          <button className="hero-button">Lets rock!</button>
        </div>
      </section>
      <section className="slider-section">
        <div className="home-title-holder">
          <p className="slider-title">
            Explore amazing events    <FontAwesomeIcon className='slider-arrow' icon={faAnglesRight} />
          </p>
        </div>
        <div className="slider-container">
          <Slider />
        </div>
      </section>
      <section className="duo-section">
        <div className="duo-section-card-title-container">
          <div className="duo-section-title-holder">
            <p className="duo-title">Explore amazing events</p>
          </div>
          <div className="duo-card-container">
            <article className="duo-card"></article>
            <article className="duo-card"></article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;
