import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {


    const username = localStorage.getItem('name');

    const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic (e.g., clear user session, etc.)

    // Redirect to the login page
    navigate('/login');
  };


  return (
    <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Shaik's webPage</a>

        <button className="btn btn-secondary ml-auto" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <p>Welcome {username} </p>
        
    </div>
    </div>
  )
}

export default Home