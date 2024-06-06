import React, { useState } from 'react' 
import { Link, useNavigate } from 'react-router-dom'
 
export default function register() {
//handle the text change
const [formData, setFormData] = useState({})

//useState for loading and handle error
const [handleError, setHandleError] = useState(null)
const [Loading, setLoading] = useState(false);
//initialize navigation
const navigate = useNavigate();

// Function to handle the text change
const handleChange = (e) =>{
   setFormData({
    ...formData,
    [e.target.id]: e.target.value,
   });
}

//Handle submit
const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
      
    setLoading(true);
      const res = await fetch('/api/signup', 
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
    setLoading(false);
    setHandleError(data.message);
    return;
  }
  setLoading(false);
  setHandleError(null);
  navigate('/login')
  } catch (error) {
    
    setLoading(false);
    setHandleError(error.message);
  }
  
};


  return (
    <section className='w-[100%] h-[100vh] bg-slate-100 flex flex-col items-center justify-center gap-6'>
        <h1 className='text-2xl font-bold text-slate-950'>Register now</h1>

        {/* input form */}
        
        <form onSubmit={handleSubmit} className='w-[64%] flex flex-col gap-4 items-center'>
            <input

              type="text"
              placeholder="Enter your name"
              id='name'
              className='w-full p-4 bg-slate-50 focus:outline-none'
              onChange={handleChange}
            />
            <input

              type="text"
              placeholder="Enter your email"
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
              <button disabled={Loading} className='bg-slate-700 text-white p-3 rounded-lg  hover:opacity-95'>{Loading? 'Loading ...': 'Sign in'}</button>
        </form>
        <p>Have an account? <Link to='/login' className='text-slate-900 font-bold text-md'>Sign in</Link> </p>

        {/* Error messagee */}
        {handleError && <p className='bg-red-500 mt-5'>Error: {handleError}</p>}

    </section>
  )
}
