import React from 'react'
import AdminHeader from '../Header/admin-header';
import LeftSideBar from '../LeftSidebar';

const PageLayout = ({ children }) => {
  return (
    <div>
      <AdminHeader />
      <LeftSideBar />
      <main>{children}</main>
    </div>
  )
}

export default PageLayout;