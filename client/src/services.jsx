// Services.jsx
import React from 'react';
import './Services.css';
import paisa from './paisa.webp';
import marketing from './network-marketing-1.jpg';
import share from './sharemarket.avif';
import BG from './Backgroundimage.jpg';


const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services :</h1>
      <div className="service-item">
        <img src={paisa} alt="Service 1" />
        <div className="service-content">
          <h2>Paisa Double</h2>
          <p>Invest your money with us and Double it overnight.</p>
        </div>
      </div>
      <div className="service-item">
        <img src={marketing} alt="Service 2" />
        <div className="service-content">
          <h2>Network Marketing</h2>
          <p>Tell 4 people about our business ,and tell those four people to tell there 4 friends to join our busniess, repeat this loop till you die and Start earning on daily basis with us </p>
        </div>
      </div>
      <div className="service-item">
        <img src={share} alt="Service 3" />
        <div className="service-content">
          <h2>Stock Market </h2>
          <p>Buy our stocks and become,harshad Mehta of Stock Market.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
