import { useContext, useEffect, useRef, useState } from 'react';
import useForm from '../../hooks/useForm';
import useValidate from '../../hooks/useValidate';
import Button from '../ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../slices/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthCredentials } from '../../slices/authSlice';
import { LoaderContext } from '../../contexts/LoaderContext';

const Loginform = ({ style }) => {
  const inputStyle = "w-full border-[1px] border-gray-200 p-1 md:p-2 outline-none border-gray-400 rounded placeholder-gray-400"
  const labelStyle = "text-sm md:text-md text-gray-400"

  const initialValue = { email: '', password: '' };
  const [emailErr, setEmailErr] = useState("");
  const [loginErr, setLoginErr] = useState("")
  const { showLoader, hideLoader } = useContext(LoaderContext);

  const { values, handleChange, resetForm } = useForm(initialValue);
  const { validateEmail } = useValidate();

  const [login, { isLoading, data, error }] = useLoginMutation();

  const { auth } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const redirect = searchParams.get('redirect') || '/';

  useEffect((auth) => {
    if (auth) {
      auth && auth.isAdmin ? navigate('/admin') : auth ? navigate(redirect) : navigate('/');
    }
  }, [redirect, auth, navigate])

  const handleEmailChange = (e) => {
    setLoginErr("");
    if (validateEmail(e.target.value)) {
      handleChange(e);
      setEmailErr("")
    }
    else if (e.target.value === '') {
      setEmailErr("")
    }
    else {
      setEmailErr("Please enter a valid email")
    }

    console.log(values)
  }

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    showLoader();
    console.log(values)
    const res = await login(values).unwrap()
      .then((res) => {
        dispatch(setAuthCredentials({ ...res }))
        navigate(redirect)
      })
      .catch((error) => {
        setLoginErr(error?.data?.message)
      })
    hideLoader();
  }

  return (
    <div className={`${style} w-full md:container flex flex-col items-start gap-4 md:gap-6`}>
      <Link to='/' className='w-full text-gray-400 text-sm md:text-md flex-row items-center gap-2 md:gap-4 cursor-pointer'>Back</Link>
      <section>
        <span className='text-xl md:text-2xl'>Login</span>
      </section>
      <form className='flex flex-col gap-1 md:gap-2 lg:gap-4 w-full'>
        <section>
          <label for="username" className={labelStyle}>Email Address</label>
          <span className='text-xs md:text-sm text-red-600 px-2'>{emailErr}</span>
          <input type="text" className={inputStyle} name="email" onChange={(e) => handleEmailChange(e)} placeholder='Email Address' />
        </section>
        <section>
          <label for="username" className={labelStyle}>Password</label>
          <input type="password" className={inputStyle} name="password" placeholder='Password'
            onChange={(e) => {
              setLoginErr("");
              handleChange(e);
              console.log(values)
            }} />
        </section>
        <span className='text-xs md:text-sm text-red-600'> {loginErr || '\u00A0'}</span>
        <Button content="Login" onClick={(e) => handleLoginFormSubmit(e)}
          style="w-full p-2 border-[.1rem] bg-blue-600 border-blue-600 text-white hover:text-blue-600 hover:bg-white text-md rounded transition" isDisabled={isLoading} />
        <section className='flex flex-col items-start gap-1 md:gap-2'>
          <span>Don't have an account? <Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'} className='text-blue-600 hover:underline'>Signup</Link></span>
          <Link to={redirect ? `/password?redirect=${redirect}` : '/password'} className='text-blue-600 hover:underline'>Forgot password?</Link>
        </section>
      </form>
    </div>
  )
}

export default Loginform