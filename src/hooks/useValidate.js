import { useState } from "react";

const useValidate = () => {

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const validatePassword = (password) => {
        // password should contain 8 letters
        // atleast one upper case
        // atleast one lower case
        // ateast one special character
        const errors = {
            lengthError: password.length < 8,
            upperError: !/[A-Z]/.test(password),
            lowerError: !/[a-z]/.test(password),
            charError: !/[!@#$%^&*(),.?":{}|<>]/.test(password),
        };

  const isValid = !Object.values(errors).includes(true);

  return { isValid, valErrors: errors };
    }

    const validatePhoneNumber = (number) => {
        const regex = /^\d{10}$/;
        return regex.test(number);
    };


    const validateUsername = (username) => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(username)
    }

    return {
        validateEmail, validatePassword, validatePhoneNumber, validateUsername
    }
}

export default useValidate;