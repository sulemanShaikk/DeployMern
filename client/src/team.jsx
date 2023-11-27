import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TeamSlideshow.css'; // You can create this CSS file for styling
import jeffBezosImage from './modi.jpg';
import naksh from './naksh.jpg';
import seema from './seema.webp';
import gabbar from './gabbar.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Modi',
    position: 'Founder & CEO',
    image: jeffBezosImage,// Replace with the actual image file path
  },

  {
    id: 1,
    name: 'Nakshbandi',
    position: 'Brand Ambassador',
    image: naksh,// Replace with the actual image file path
  },

  {
    id: 1,
    name: 'Seema & sachin',
    position: 'Promoters',
    image: seema,// Replace with the actual image file path
  },

  {
    id: 1,
    name: 'Gabbar bhai',
    position: 'Chief of Security Dept',
    image: gabbar,// Replace with the actual image file path
  },

  // Add more team members as needed
];

const TeamSlideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="team-slideshow-container">
      <h2>Our Team</h2>
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member-slide">
            <img src={member.image} alt={member.name} />

            <div className="team-member-details">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              {/* Add more details as needed */}
            </div>
          </div>
         ))}
      </Slider>
    </div>
  );
};

export default TeamSlideshow;
