import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import useForm from '../../hooks/useForm';
import useValidate from '../../hooks/useValidate';
import { useRegisterMutation } from '../../slices/userApiSlice';
import { useDispatch } from 'react-redux';
import { setAuthCredentials } from '../../slices/authSlice';
import { LoaderContext } from '../../contexts/LoaderContext';

const SignupForm = ({ style }) => {
  const inputStyle = "w-full border-[1px] border-gray-200 p-1 md:p-2 outline-none border-gray-400 rounded placeholder-gray-400"
  const labelStyle = "text-sm md:text-md text-gray-400"

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {search} = useLocation();
  const searchParams = new URLSearchParams(search);
  const redirect = searchParams.get('redirect') || '/';

  const initialValue = { username: '', email: '', password: '', number: '' };

  const { values, handleChange, resetForm } = useForm(initialValue);
  const { showLoader, hideLoader } = useContext(LoaderContext);

  const [register, { data, isLoader, error}] = useRegisterMutation(); 

  const [errors, setErrors] = useState({
    emailErr: '', usernmErr: '', numberErr: '', isPasswordErr: false, passwordErr: {}, cnfmPasswordErr: ''
  });
  const [registerErr, setRegisterErr] = useState("")

  const { validateEmail, validateUsername, validatePhoneNumber, validatePassword } = useValidate();

  const handleUsernameChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setErrors({ ...errors, usernmErr: '' });
      return;
    }

    if (validateUsername(value)) {
      handleChange(e);
      setErrors({ ...errors, usernmErr: '' });
    } else {
      setErrors({ ...errors, usernmErr: 'Username should only contain letters and numbers!' });
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setErrors({ ...errors, emailErr: '' });
      return;
    }

    if (validateEmail(value)) {
      handleChange(e);
      setErrors({ ...errors, emailErr: '' });
    } else {
      setErrors({ ...errors, emailErr: 'Enter a valid email!' });
    }
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setErrors({ ...errors, numberErr: '' });
      return;
    }

    if (validatePhoneNumber(value)) {
      handleChange(e);
      setErrors({ ...errors, numberErr: '' });
    } else {
      setErrors({ ...errors, numberErr: 'Enter a valid phone number!' });
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setErrors({ ...errors, isPasswordErr: false, passwordErr: {} });
      return;
    }

    const { isValid, valErrors } = validatePassword(value);

    if (isValid) {
      handleChange(e);
      setErrors({ ...errors, isPasswordErr: false, passwordErr: {} });
    } else {
      setErrors({ ...errors, isPasswordErr: true, passwordErr: valErrors });
    }
  };

  const handleConfirmPwsdChange = (e) => {

    const value = e.target.value;

    if (value) {
      setErrors({ ...errors, cnfmPasswordErr: '' });
    }

    if (value == values.password) {
      handleChange(e);
      setErrors({ ...errors, cnfmPasswordErr: '' });
    } else {
      setErrors({ ...errors, cnfmPasswordErr: 'Passwords doesn`t match!' });
    }

  }

  const handleRegisterFormSubmit = (e) => {
    showLoader();
    e.preventDefault();

    const { usernmErr, emailErr, isPasswordErr, numberErr } = errors;

    const hasErrors = usernmErr !== '' || emailErr !== '' || isPasswordErr || numberErr !== '';

    if (hasErrors) {
      setRegisterErr("Please enter valid details!")
      hideLoader();
      return;
    }
    else {
      const res = register(values).unwrap()
      .then((res) => {
        dispatch(setAuthCredentials({...res,}))
        hideLoader();
        navigate(redirect);
      })
      .catch((err) => {
        setRegisterErr(err?.data?.message);
        hideLoader();
      })
    }
  }

  return (
    <div className={`${style} w-full md:container flex flex-col items-start gap-4 md:gap-6`}>
      <Link to='/' className='w-full text-gray-400 text-sm md:text-md flex-row items-center gap-4 md:gap-4 cursor-pointer'>Back</Link>
      <section>
        <span className='text-xl md:text-2xl'>Signup </span>
      </section>
      <form className='flex flex-col gap-10 md:gap-4 w-full'>
        <section className='group text-black'>
          <label for="username" className={labelStyle}>Full Name</label>
          <span className='text-xs md:text-sm text-red-600 px-2'>{errors.usernmErr}</span>
          <input type="text" name="username" onChange={(e) => handleUsernameChange(e)} className={inputStyle} placeholder='Username' />
        </section>
        <section>
          <label for="email" className={labelStyle}>Email Address</label>
          <span className='text-xs md:text-sm text-red-600 px-2'>{errors.emailErr}</span>
          <input type="text" name="email" onChange={(e) => handleEmailChange(e)} className={inputStyle} placeholder='Email Address' />
        </section>
        <section>
          <label for="number" className={labelStyle}>Phone Number</label>
          <span className='text-xs md:text-sm text-red-600 px-2'>{errors.numberErr}</span>
          <input type="text" name="number" onChange={(e) => handleNumberChange(e)} className={inputStyle} placeholder='Phone Number' />
        </section>
        <section>
          <section className={`flex flex-col items-start justify-center p-2 text-sm border-[0.1px] rounded ${errors.isPasswordErr ? 'border-red-600' : 'border-gray-400 text-gray-400'}`}>
            <span className={`${errors.passwordErr?.lengthError ? 'text-red-600' : 'text-gray-400'}`}>
              Password must be at least 8 characters
            </span>
            <span className={`${errors.passwordErr?.upperError ? 'text-red-600' : 'text-gray-400'}`}>
              Must contain at least one uppercase letter
            </span>
            <span className={`${errors.passwordErr?.lowerError ? 'text-red-600' : 'text-gray-400'}`}>
              Must contain at least one lowercase letter
            </span>
            <span className={`${errors.passwordErr?.charError ? 'text-red-600' : 'text-gray-400'}`}>
              Must contain at least one special character
            </span>
          </section>

          <label htmlFor="password" className={labelStyle}>Password</label>
          <input
            type="password"
            name="password"
            onChange={handlePasswordChange}
            className={inputStyle}
            placeholder="Password"
          />
        </section>

        <section>
          <label for="cnfmpassword" className={labelStyle}>Confirm Password</label>
          <span className='text-xs md:text-sm text-red-600 px-2'>{errors.cnfmPasswordErr}</span>
          <input type="password" name="cnfmerror" onChange={(e) => handleConfirmPwsdChange(e)} className={inputStyle} placeholder='Confirm Password' />
        </section>
        <span className='text-xs md:text-sm text-red-600'> {registerErr || '\u00A0'}</span>
        <Button content="Register" onClick={(e) => handleRegisterFormSubmit(e)}
          style="w-full p-2 border-[.1rem] bg-blue-600 border-blue-600 text-white hover:text-blue-600 text-md rounded hover:bg-white transition" />
        <section className='flex flex-col items-start gap-1 md:gap-2'>
          <span>Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}className='text-blue-600 hover:underline'>Login</Link></span>
        </section>
      </form>
    </div>
  )
}

export default SignupForm