import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const ResetPasswordForm = ({ style }) => {
  const inputStyle = "w-full border-[1px] border-gray-200 p-1 md:p-2 outline-none border-gray-400 rounded placeholder-gray-400"
  const labelStyle = "text-sm md:text-md text-gray-400"
  const nameRef = useRef();

  return (
    <div className={`${style} w-full md:container flex flex-col items-start gap-4 md:gap-6`}>
      <Link to='/' className='w-full text-gray-400 text-sm md:text-md flex-row items-center gap-2 md:gap-4 cursor-pointer'>Back</Link>
      <section>
        <span className='text-xl md:text-2xl'>Reset Password</span>
      </section>
      <form className='flex flex-col gap-1 md:gap-2 lg:gap-4 w-full'>
        <section>
          <label ref={nameRef} for="password" className={labelStyle}>Old password</label>
          <input type="text" className={inputStyle} placeholder='Email Address' />
        </section> 
        <section>
          <label ref={nameRef} for="nwPassword" className={labelStyle}>New oas</label>
          <input type="text" className={inputStyle} placeholder='Email Address' />
        </section>
        <Button content="Reset Password"
          style="w-full p-2 border-[.1rem] bg-blue-600 border-blue-600 text-white hover:text-blue-600 text-md rounded hover:bg-white transition" />

      </form>
    </div>
  )
}

const ResetPassword = () => {
  return (
    <div
      className="smcontainer md:container w-full md:min-h-[80vh] 
          flex justify-center my-[1rem] md:my-[2rem] p-2 md:p-4 py-20 md:py-28">
      <div className='flex flex-row justify-center w-full lg:w-3/4'>
        <div className='col-span-1 hidden md:flex w-full h-full bg-cover' style={{ backgroundImage: "url('/images/banner1.jpg')" }}></div>
        <ResetPasswordForm style="w-full sm:w-3/4 col-span-1 border-[1px] border-gray-200 p-4 md:p-6" />
      </div>
    </div>
  )
}

export default ResetPassword