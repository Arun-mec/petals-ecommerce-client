import React from 'react'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import UserEdit from '../../components/admin/UserEdit'

const AdminUserEditPage = () => {
  return (
    <>
        <Header />
        <UserEdit />
        <Footer />
    </>
  )
}

export default AdminUserEditPage