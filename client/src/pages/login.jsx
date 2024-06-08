import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//impporting dispatch
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess , signInFailure } from '../redux/user/userSlice.js'
import OAuth from '../components/OAuth';
function Login() {
  
//handle the text change
const [formData, setFormData] = useState({});
//useState for loading and handle error
const {handleError, Loading} = useSelector((state)=> state.user)
//initialize navigation
const navigate = useNavigate();
//import dispatch
const dispatch = useDispatch();

const handleChange = (e) =>{
  setFormData({
   ...formData,
   [e.target.id]: e.target.value,
  });
  
}
  
  //handle submitted data
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        
        dispatch(signInStart())
        const res = await fetch('/api/signin', 
          {
            method: 'POST',
            headers:{
              'content-type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );
     
    const data = await res.json();
    if (data.success === false) {
      dispatch(signInFailure(data.message))
      return;
    }
    dispatch(signInSuccess(data));
    navigate('/')

    } catch (error) {
      dispatch(signInFailure(data.message))

    }
    
  };

  return (
    <section onSubmit={handleSubmit} className='w-[100%] h-[100vh] bg-slate-100 flex flex-col items-center justify-center gap-6'>
    <h1 className='text-2xl font-bold text-slate-950'>Welcome back Login</h1>

    {/* input form */}
    
    <form className='w-[64%] flex flex-col gap-4 items-center'>
        <input

          type="text"
          placeholder="Enter your name"
          id='email'
          className='w-full p-4 bg-slate-50 focus:outline-none'
          onChange={handleChange}
        />
       
        <input
          type="password"
          placeholder="Enter your password"
          id='password'
          className='w-full p-4 bg-slate-50 focus:outline-none'
          onChange={handleChange}
        />
        {/* button */}
        <button disabled={Loading} className='bg-slate-700 text-white p-3 rounded-lg w-full hover:opacity-95'>{Loading? 'Loading ...': 'Sign in'}</button>  
        <OAuth/>
       </form>
    <p>Don't have an account? <Link to='/register' className='text-slate-900 font-bold text-md'>Sign up</Link> </p>
    {handleError && <p className='bg-red-500 mt-5'>Error: {handleError}</p>}
</section>
  )
}

export default Login