import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function HeaderComp() {
  const {currentUser} = useSelector(state => state.user);
  return (
     <header className='flex justify-evenly items-center w-full bg-slate-200 py-2'>
       <Link to='/'>
          <h1 className='text-2xl font-bold text-slate-600'>Sahand<span className='text-slate-900'>Estate</span></h1>
       </Link>
       <form className='bg-slate-100 rounded-md flex items-center p-2'>
         <input 
         type="text" 
         placeholder='Search..'
         className='bg-transparent h-full focus:outline-none placeholder:text-slate-500'
         />
         <FaSearch className='text-slate-500 hover:bg-slate-600'/>
       </form>
       <ul className='flex gap-4 font-medium text-slate-950'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/profile'>
            {/* Condition show the profile if user is authenticated other wise hide it */}
               {currentUser? (<img className='w-7 h-7 object-cover rounded-full' src={currentUser.avatar} alt='user profile'/>): <p>Register</p>}
            </Link> 
            
       </ul>
     </header>
  )
}
