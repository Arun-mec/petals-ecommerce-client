import LoginForm from './LoginForm'

const LoginBanner = () => {
  return (
    <div 
        className="smcontainer md:container w-full md:min-h-[80vh] 
           flex justify-center my-[1rem] md:my-[2rem] p-2 md:p-4 py-20 md:py-28">
            <div className='flex flex-row justify-center w-full lg:w-3/4'>
              <div className={`col-span-1 hidden md:flex w-full bg-cover`} style={{backgroundImage:"url('/images/banner1.jpg')"}}></div>
              <LoginForm style="w-full sm:w-3/4 max-h-fit col-span-1 border-[1px] border-gray-200 p-4 md:p-6 shadow-md" />
            </div>
    </div>
  )
}

export default LoginBanner