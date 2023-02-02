// function onSubmit(e) {
//   e.preventDefault();
// }
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/register');
  }, []);
  return;
  // <>
  //   <div className='w-full h-screen max-w-[90%] md:max-w-[80%] lg:max-w-[50%] m-auto grid place-items-center'>
  //     <div className=' rounded-md p-16 shadow-lg bg-sky-50 w-full'>
  //       <form
  //         onSubmit={onSubmit}
  //         className='flex flex-col items-left justify-center'
  //       >
  //         <label htmlFor='email' className='text-1xl font-bold'>
  //           Email
  //         </label>
  //         <input
  //           type='email'
  //           placeholder='Enter your email address'
  //           className='bg-white rounded-md px-2 py-1 mb-8 w-full'
  //         />
  //         <label htmlFor='password' className='text-1xl font-bold'>
  //           Password
  //         </label>
  //         <input
  //           type='password'
  //           placeholder='Enter your Password'
  //           className='bg-white rounded-md px-2 py-1 mb-8'
  //         />
  //         <button
  //           type='submit'
  //           className='bg-sky-600 text-white text-center py-1 px-3 rounded-md mb-8'
  //         >
  //           Login
  //         </button>
  //         <span className='text-center text-sky-800'>
  //           Or sign in with Google
  //         </span>
  //         <div className='text-center mt-2'>
  //           <button className='cursor-pointer bg-no-repeat bg-center bg-[url("../../googleicon.svg")] h-[60px] w-[60px] bg-cover rounded-full'></button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // </>
}
