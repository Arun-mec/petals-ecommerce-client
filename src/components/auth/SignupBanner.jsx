import React from 'react'
import SignupForm from './SignupForm'

const SignupBanner = () => {
  return (
    <div
      className="smcontainer md:container w-full md:min-h-[80vh] 
          flex justify-center my-[1rem] md:my-[2rem] p-2 md:p-4 py-20 md:py-28">
      <div className='flex flex-row justify-center w-full lg:w-3/4'>
        <div className='col-span-1 hidden md:flex w-full h-full bg-cover' style={{ backgroundImage: "url('/images/banner1.jpg')" }}></div>
        <SignupForm style="w-full sm:w-3/4 col-span-1 border-[1px] border-gray-200 p-4 md:p-6 shadow-md" />
      </div>
    </div>
  )
}

export default SignupBanner