import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Create a CSS file for styling
import v1 from './videos/vid1.mp4'
import v2 from './videos/vid2.mp4'
import v3 from './videos/vid3.mp4'

const Home = () => {
  const username = localStorage.getItem('name');
  const navigate = useNavigate();

  return (
    <div>
      <div className='video-container'>
        <div className='video-wrapper'>
        {/* Video 1 */}
        <video autoPlay loop muted className='fullscreen-video'>
          <source src={v1} type='video/mp4' />
          </video>
        </div>

        <div className='video-wrapper'>
        {/* Video 2 */}
        <video autoPlay loop muted className='fullscreen-video'>
          <source src={v2} type='video/mp4' />
          </video>
          </div>


        <div className='video-wrapper'>
        {/* Video 3 */}
        <video autoPlay loop muted className='fullscreen-video'>
          <source src={v3} type='video/mp4' />
         </video>
         </div>

        <div className='overlay'>
          <p>{username}, Congratulations Abh 21 days me aapka paisa double</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
