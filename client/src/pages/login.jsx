import React from 'react'
import { Link } from 'react-router-dom'

function login() {
  return (
    <section className='w-[100%] h-[100vh] bg-slate-100 flex flex-col items-center justify-center gap-6'>
    <h1 className='text-2xl font-bold text-slate-950'>Welcome back Login</h1>

    {/* input form */}
    
    <form className='w-[64%] flex flex-col gap-4 items-center'>
        <input

          type="text"
          placeholder="Enter your name"
          id='name'
          className='w-full p-4 bg-slate-50 focus:outline-none'
        />
       
        <input
          type="password"
          placeholder="Enter your password"
          id='password'
          className='w-full p-4 bg-slate-50 focus:outline-none'
        />
        {/* button */}
        <button  className='bg-slate-700 text-white p-3 rounded-lg  hover:opacity-95'>Sign in</button>    </form>
    <p>Don't have an account? <Link to='/login' className='text-slate-900 font-bold text-md'>Sign up</Link> </p>
</section>
  )
}

export default login