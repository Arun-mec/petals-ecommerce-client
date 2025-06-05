import React from 'react'
import Footer from '../../components/layout/footer/Footer'
import Header from '../../components/layout/header/Header'
import LoginBanner from '../../components/auth/LoginBanner'
import LoginForm from '../../components/auth/LoginForm'

const LoginPage = () => {
  return (
    <>
        <Header /> 
        <LoginBanner />
        <Footer />
    </>
  )
}

export default LoginPage