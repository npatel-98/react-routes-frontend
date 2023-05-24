import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import MainNavigation from './MainNavigation'

const RootLayout = () => {
  // const navigate = useNavigation(); 

  return (
    <>
        <MainNavigation />
        <main>
          {/* { navigate.state === 'loading' && <p>loading...</p> } */}
          <Outlet />
        </main>
    </>
    
  )
}

export default RootLayout