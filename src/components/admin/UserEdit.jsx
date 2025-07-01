import React, { useContext, useEffect, useRef, useState } from 'react'
import useValidate from '../../hooks/useValidate';
import Button from '../ui/Button';
import { Link, useParams } from 'react-router-dom';
import { useGetUserQuery, useUpdateUserMutation } from '../../slices/userApiSlice';

const UserEdit = () => {

    const {id : userId} = useParams();

    const {data:user, isLoading, error, refetch} = useGetUserQuery(userId);
    const [updateUser, {isLoading : isUpdatingUser, error : userUpdationErr}] = useUpdateUserMutation();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const { validateEmail, validateUsername, validatePhoneNumber, validatePassword } = useValidate();

    const inputStyle = `${!isEdit ? 'bg-gray-100' : 'bg-none'} w-full border-[1px] border-gray-200 p-1 md:p-2 outline-none border-gray-400 rounded placeholder-gray-400`
    const labelStyle = "text-sm md:text-md text-gray-400"

    const [errors, setErrors] = useState({
        emailErr: '', usernmErr: '', numberErr: ''
    });

    const [updateErr, setUpdaterErr] = useState("")

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

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const updatedUser = {
            id : userId,
            username,
            email,
            number,
            isAdmin
        }
        await updateUser(updatedUser);
        refetch();
        setIsEdit(false);
    }

    useEffect(() => {
        if (user) {
            setUsername(user.username || '');
            setEmail(user.email || '');
            setNumber(user.number || '');
            setIsAdmin(user.isAdmin || false)
        }
    }, [user]);

    return (
        <div className="smcontainer md:container flex flex-col items-center justify-center my-[1rem] md:my-[2rem] p-2 md:p-4 py-20 md:py-28 gap-4 md:gap-6">

            <div
                className="w-full sm:w-3/4 lg:w-1/2 md:min-h-[80vh] 
                    flex flex-col justify-start items-start gap-4 md:gap-6 p-4 shadow-md rounded">
                <Link to="/admin/users" className="text-blue-500 underline mb-4 inline-block">← Back</Link>
                <div className="mx-auto w-full md:w-3/4 flex flex-row justify-between items-center border-b-[0.1px] border-b-gray-400 p-1">
                    <span className='text-xl'>User Information</span> 
                    {
                        !isEdit &&
                            <span className="text-blue-500 underline inline-block cursor-pointer" 
                                onClick={() => setIsEdit(true)}>Edit</span> 
                    }
                </div>
                <form className='mx-auto flex flex-col gap-10 md:gap-4 w-full md:w-3/4'>
                    <section className='group text-black'>
                        <label for="username" className={labelStyle}>Full Name</label>
                        <span className='text-xs md:text-sm text-red-600 px-2'>{errors.usernmErr}</span>
                        <input type="text" name="username" value={username} onChange={(e) => handleUsernameChange(e)} className={inputStyle} placeholder='Username' disabled={!isEdit} />
                    </section>
                    <section>
                        <label for="email" className={labelStyle}>Email Address</label>
                        <span className='text-xs md:text-sm text-red-600 px-2'>{errors.emailErr}</span>
                        <input type="text" name="email" value={email} onChange={(e) => handleEmailChange(e)} className={inputStyle} placeholder='Email Address' disabled={!isEdit} />
                    </section>
                    <section>
                        <label for="number" className={labelStyle}>Phone Number</label>
                        <span className='text-xs md:text-sm text-red-600 px-2'>{errors.numberErr}</span>
                        <input type="text" name="number" value={number || ''} onChange={(e) => handleNumberChange(e)} className={inputStyle} placeholder='Phone Number' disabled={!isEdit} />
                    </section>
                    <section className="w-full flex flex-row items-center gap-2">
                        <input
                            type="checkbox"
                            id="isadmin"
                            name="isadmin"
                            checked={isAdmin}
                            onChange={() => setIsAdmin(!isAdmin)}
                            className="border border-gray-200 p-1 md:p-2 outline-none rounded"
                            disabled={!isEdit}
                        />
                        <label
                            htmlFor="isadmin"
                            className="text-sm md:text-md text-black">Is Admin</label>
                    </section>

                    <span className='text-xs md:text-sm text-red-600'> {updateErr || '\u00A0'}</span>
                    {
                        isEdit && 
                        <Button 
                            content={isUpdatingUser ? "Saving user..." : "Update User"}
                            onClick={(e) => handleUpdateUser(e)}
                            style="w-full p-2 border-[.1rem] bg-blue-600 border-blue-600 text-white hover:text-blue-600 text-md rounded hover:bg-white transition" />
                    }
                </form>
            </div>
        </div>
    )
}

export default UserEdit