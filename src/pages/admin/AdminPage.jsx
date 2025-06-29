import React from 'react'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import Dashboard from '../../components/admin/Dashboard'

const AdminPage = () => {
  return ( 
    <>
        <Header />
        <Dashboard />
        <Footer />
    </>
  )
}

export default AdminPage