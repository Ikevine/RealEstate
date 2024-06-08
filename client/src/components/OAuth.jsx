import React from 'react';
import {useNavigate } from 'react-router-dom'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
//impporting dispatch
import { useDispatch } from 'react-redux'
import {signInSuccess} from '../redux/user/userSlice.js';

export default function OAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  handleGoogleSubmit = async(e) =>{
    try {

      //goo to the google
      const provider = new GoogleAuthProvider()
      //recognize the request application
      const auth = getAuth(app);

      //sign in with popup
      const result = await signInWithPopup(auth, provider);
      
      //send to the backend
      const res = await fetch('api/auth/google',{
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({name: result.user.displayName, email: result.user.email, photo: result.user.photoURL}),
        
      });
      // const data = await res.json();
      // dispatch(signInSuccess(data));
      navigate('/')
    } catch (error) {
      console.log('Here is the error:::: ',error)
    }
  }
  return (
    <button 
    onClick={handleGoogleSubmit}
    type='button' className='bg-red-500 text-xl focus:opacity-50 w-full py-2 font-medium text-white rounded-md'>Continue with google
    </button>
  )
}
