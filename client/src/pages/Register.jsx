import axios from 'axios';
import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({});
  return (
    <>
      <div className='w-full h-screen max-w-[90%] md:max-w-[80%] lg:max-w-[50%] m-auto flex flex-col items-center justify-start'>
        <h1 className='mt-32 mb-16 text-4xl font-bold'>Create an account</h1>
        <div className=' rounded-md p-16 shadow-lg bg-sky-50 w-full'>
          <form className='flex flex-col items-left justify-center'>
            <label htmlFor='text' className='text-1xl font-bold mb-2'>
              Name
            </label>
            <input
              type='text'
              placeholder='Enter your Name'
              className='bg-white rounded-md px-2 py-1 mb-8'
            />
            <label htmlFor='email' className='text-1xl font-bold mb-2'>
              Email
            </label>
            <input
              type='email'
              placeholder='Enter your email address'
              className='bg-white rounded-md px-2 py-1 mb-8 w-full'
            />
            <label htmlFor='password' className='text-1xl font-bold mb-2'>
              Password
            </label>
            <input
              type='password'
              placeholder='Enter your Password'
              className='bg-white rounded-md px-2 py-1 mb-8'
            />
            <div className='text-center'>
              <button
                type='submit'
                className='bg-sky-600 text-white text-center py-1 px-3 rounded-md mb-8 w-[25%]'
              >
                Sign Up
              </button>
            </div>
            <span className='text-center text-sky-400'>
              Already an account?
            </span>
            <div className='text-center mt-2'>
              <button className='cursor-pointer text-sky-800'>
                <Link to='/signin'>Sign In</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
// bg-no-repeat bg-center bg-[url("../../googleicon.svg")] h-[60px] w-[60px] bg-cover rounded-full'
