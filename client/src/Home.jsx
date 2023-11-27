import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Create a CSS file for styling
import v1 from './videos/vid1.mp4'
import v2 from './videos/vid2.mp4'
import v3 from './videos/vid3.mp4'

const Home = () => {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  const username = localStorage.getItem('name');
  const navigate = useNavigate();


  const handleAmountSubmit = () => {
    // Check if the entered amount is a valid number
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount)) {
      // Double the amount and set the result
      setResult(parsedAmount * 2);
    } else {
      // Handle invalid input (e.g., show an error message)
      setResult(null);
    }
  };


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
          <div className='table-center'>
          {/* Input for entering the amount */}
          <input
            type='number'
            placeholder='Enter amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          {/* Button to submit the amount */}
          <button onClick={handleAmountSubmit}>invest</button>

          {/* Display the result */}
          {result !== null && <p>if you invest {amount} you'll get <div className='result'>{result}</div></p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
