import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3005/login', { name, email, password })
      .then(result => {
        console.log(result);

        if (result.data.status === "success" && result.data.name) {
          localStorage.setItem('name', result.data.name);
          navigate('/home');
        } else {
          setError('Login failed. Please check your credentials.');
        }
      })
      .catch(err => {
        console.log(err);
        setError('An error occurred. Please try again later.');
      });
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>Email</strong>
            </label>
            <input
              type='text'
              placeholder='Enter Email'
              autoComplete='off'
              name='name'
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              autoComplete='off'
              name='password'
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0 bg-black text-white'>
            Login
          </button>
        </form>
        {error && <p className="text-danger">{error}</p>}
        <p>
          Don't have an account?
        </p>
        <Link to="/register" className='btn btn-success w-100 rounded-0 bg-success text-white' type='button'>
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
