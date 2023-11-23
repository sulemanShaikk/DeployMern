import React,{useState}from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3005/register', { name, email, password })
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=> console.log(err));
    }


  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Register</h2>
    <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor='email'>
                <strong>Name</strong>
            </label>
        <input  
           type='text'
           placeholder='Enter Name'
           autoComplete='off'
           name='email'
           className='form-control rounded-0'
           onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className='mb-3'>
            <label htmlFor='email'>
                <strong>Email</strong>
            </label>
        <input  
           type='text'
           placeholder='Enter Email'
           autoComplete='off'
           name='email'
           className='form-control rounded-0'
           onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='mb-3'>
    <label htmlFor='password'>
      <strong>Password</strong>
    </label>
    <input
      type='password'  /* Change input type to 'password' */
      placeholder='Enter Password'
      autoComplete='off'
      name='password'  /* Corrected field name */
      className='form-control rounded-0'
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <button type='submit' className='btn btn-success w-100 rounded-0 bg-black text-white'>
    Register
  </button>
</form>
        <p>
            Already have an account?  
        </p>
        <Link to="/login"  className='btn btn-success w-100 rounded-0 bg-success text-white'>
       Login
       </Link>

    
        </div>
        
    </div>
  )
}

export default Signup;