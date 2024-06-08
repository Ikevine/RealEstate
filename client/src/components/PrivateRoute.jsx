import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
export default function PrivateRoute() {
    const currentUsr = useSelector((state)=> state.user);
  return  currentUsr ? <Outlet/> : <Navigate to='/login'/>;
}
