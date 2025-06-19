import React, { useContext, useEffect, useRef, useState } from 'react'
import useValidate from '../../hooks/useValidate';
import useForm from '../../hooks/useForm';
import { LoaderContext } from '../../contexts/LoaderContext';
import Button from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useUdpateProfileMutation } from '../../slices/userApiSlice';
import { setAuthCredentials } from '../../slices/authSlice';
import Myorders from './Myorders';
import { useGetMyOrdersQuery } from '../../slices/orderApiSlice';

const Profile = () => {

    const inputStyle = "w-full border-[1px] border-gray-200 p-1 md:p-2 outline-none border-gray-400 rounded placeholder-gray-400"
    const labelStyle = "text-sm md:text-md text-gray-400"

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    const { showLoader, hideLoader } = useContext(LoaderContext);

    const { validateEmail, validateUsername, validatePhoneNumber, validatePassword } = useValidate();

    const [errors, setErrors] = useState({
        emailErr: '', usernmErr: '', numberErr: '', isPasswordErr: false, passwordErr: {}, cnfmPasswordErr: ''
    });
    const [updateErr, setUpdaterErr] = useState("")

    const [updateProfile, { isLoading, error, data }] = useUdpateProfileMutation();

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);

        if (value === '') {
            setErrors({ ...errors, usernmErr: '' });
            return;
        }

        if (validateUsername(value)) {
            setErrors({ ...errors, usernmErr: '' });
        } else {
            setErrors({ ...errors, usernmErr: 'Username should only contain letters and numbers!' });
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (value === '') {
            setErrors({ ...errors, emailErr: '' });
            return;
        }

        if (validateEmail(value)) {
            setErrors({ ...errors, emailErr: '' });
        } else {
            setErrors({ ...errors, emailErr: 'Enter a valid email!' });
        }
    };


    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (value === '') {
            setErrors({ ...errors, isPasswordErr: false });
            return;
        }

        const { isValid, valErrors } = validatePassword(value);

        if (isValid) {
            setErrors({ ...errors, isPasswordErr: false });
        } else {
            setErrors({ ...errors, isPasswordErr: true });
        }
    };

    const handleNumberChange = (e) => {
        const value = e.target.value;
        setNumber(value); // Always update the input state

        if (value === '') {
            setErrors({ ...errors, numberErr: '' });
            return;
        }

        if (validatePhoneNumber(value)) {
            setErrors({ ...errors, numberErr: '' });
        } else {
            setErrors({ ...errors, numberErr: 'Enter a valid phone number!' });
        }
    };


    useEffect(() => {
    if (auth) {
        setUsername(auth.auth.username || '');
        setEmail(auth.auth.email || '');
        setNumber(auth.auth.number || '');  // ← important default
    }
}, [auth]);


    const handleUpdateProfile = async (e) => {
        showLoader();
        e.preventDefault();
        try {
            const user = await updateProfile({
                _id: auth.auth.profile,
                username:username, email:email, password: password, number: number
            }).unwrap();
            console.log(user)
            dispatch(setAuthCredentials(user));
            hideLoader();
        } catch (error) {
            setUpdaterErr(error?.data?.message || error.message);
            hideLoader();
        }
    }
    
    return (
        <div className="smcontainer md:container flex flex-col items-center justify-center my-[1rem] md:my-[2rem] p-2 md:p-4 py-20 md:py-28 gap-4 md:gap-6">
            <div className={`w-full sm:w-3/4 lg:w-1/2 flex flex-col justify-start items-start gap-4 md:gap-6 p-4 shadow-md rounded`}>
                <div className='flex flex-col'>Hello <span className='text-xl font-bold'>{username}</span></div>
            </div>
            <div
                className="w-full sm:w-3/4 lg:w-1/2 md:min-h-[80vh] 
                    flex flex-col justify-start items-start gap-4 md:gap-6 p-4 shadow-md rounded">
                <div className="w-full flex flex-row justify-between items-center border-b-[0.1px] border-b-gray-400 p-1">
                    <span className='text-xl'>Profile</span>
                </div>
                <form className='flex flex-col gap-10 md:gap-4 w-full md:w-3/4'>
                    <span className='text-lg md:text-xl'>Personal Information</span>
                    <section className='group text-black'>
                        <label for="username" className={labelStyle}>Full Name</label>
                        <span className='text-xs md:text-sm text-red-600 px-2'>{errors.usernmErr}</span>
                        <input type="text" name="username" value={username} onChange={(e) => handleUsernameChange(e)} className={inputStyle} placeholder='Username' />
                    </section>
                    <section>
                        <label for="email" className={labelStyle}>Email Address</label>
                        <span className='text-xs md:text-sm text-red-600 px-2'>{errors.emailErr}</span>
                        <input type="text" name="email" value={email} onChange={(e) => handleEmailChange(e)} className={inputStyle} placeholder='Email Address' />
                    </section>
                    <span className='text-lg md:text-xl'>Contact</span>
                    <section>
                        <label for="number" className={labelStyle}>Phone Number</label>
                        <span className='text-xs md:text-sm text-red-600 px-2'>{errors.numberErr}</span>
                        <input type="text" name="number" value={number || ''} onChange={(e) => handleNumberChange(e)} className={inputStyle} placeholder='Phone Number' />
                    </section>
                    <section>
                        <label for="number" className={labelStyle}>Password</label>
                        <span className='text-xs md:text-sm text-red-600 px-2'>{errors.isPasswordErr && `Password doesn't matches the crieteria`}</span>
                        <input type="password" name="number" value={password} onChange={(e) => handlePasswordChange(e)} className={inputStyle} placeholder='Password' />
                    </section>
                    <span className='text-xs md:text-sm text-red-600'> {updateErr || '\u00A0'}</span>
                    <Button content="Update Profile" onClick={(e) => handleUpdateProfile(e)}
                        style="w-full p-2 border-[.1rem] bg-blue-600 border-blue-600 text-white hover:text-blue-600 text-md rounded hover:bg-white transition" />
                </form>
            </div>
        </div>
    )
}

export default Profile