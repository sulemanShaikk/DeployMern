import React from 'react';
import './about.css';
import paisa from './paisa.webp'
import marketing from './network-marketing-1.jpg'
import share from './sharemarket.avif'

const About = () => {
  return (
    <div className="about-container">
      <h1>Who Are We?</h1>
      <p>
        We dance with numbers and making money for our costumers.
      </p>
      <h2>What Are We About?</h2>
      <p>
        At our Organization, we are all about decoding the secrets of the stock market, mastering the art of network marketing, and turning investing into a thrilling game of chance.
      </p>
      <h2>Our Activities</h2>
      <div className="activity">
        <img src={paisa} alt="Stock Market" />
        <p>We speak fluent Wall Street and consider market volatility our daily roller coaster ride.</p>
      </div>
      <div className="activity">
        <img src={marketing} alt="Network Marketing" />
        <p>We are the maestros of making connections, turning every networking event into a party.</p>
      </div>
      <div className="activity">
        <img src={share} alt="Investing" />
        <p>We play financial chess, making strategic moves that would make Warren Buffett give us a high-five.</p>
      </div>
      <p>
        Join us on this wild adventure where the only rule is to have fun while making that sweet, sweet cash.
      </p>
    </div>
  );
};

export default About;
