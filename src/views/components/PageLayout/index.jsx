import React from 'react'
import AdminHeader from '../Header/admin-header';
import LeftSideBar from '../LeftSidebar';

const PageLayout = ({ children }) => {
  return (
    <div>
      <AdminHeader />
      <div className='grid grid-cols-8 '>
        <LeftSideBar />
        <div className='px-8 my-6 col-span-7'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageLayout;