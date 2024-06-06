import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
export default function register() {
  return (
    <section className='w-[100%] h-[100vh] bg-slate-100 flex flex-col items-center justify-center gap-6'>
        <h1 className='text-2xl font-bold text-slate-950'>Register now</h1>

        {/* input form */}
        <form className='w-[64%] flex flex-col gap-4 items-center'>
            <Input
              placeholders="Enter your name"
            />
            <Input
              placeholders="Enter your email"
            />
            <Input
              placeholders="Enter your password"
            />
        </form>

        {/* button */}
        <Button
         content = "Sign up"
         bgcolor= "bg-slate-800"
        />
        <p>Have an account? <Link to='/login' className='text-slate-900 font-bold text-md'>Sign in</Link> </p>
    </section>
  )
}
