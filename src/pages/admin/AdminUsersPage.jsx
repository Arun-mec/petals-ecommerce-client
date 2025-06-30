import React from 'react'
import Header from '../../components/layout/header/Header'
import UserList from '../../components/admin/UserList'
import Footer from '../../components/layout/footer/Footer'

const AdminUsersPage = () => {
  return (
    <>
        <Header />
        <UserList />
        <Footer />
    </>
  )
}

export default AdminUsersPage