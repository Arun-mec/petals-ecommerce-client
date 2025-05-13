import React from 'react'
import Footer from '../../components/layout/footer/Footer'
import Header from '../../components/layout/header/Header'
import LoginBanner from '../../components/auth/login/LoginBanner'
import LoginForm from '../../components/auth/login/LoginForm'

const Loginpage = () => {
  return (
    <>
        <Header /> 
        <LoginForm />
        <LoginBanner />
        <Footer />
    </>
  )
}

export default Loginpage