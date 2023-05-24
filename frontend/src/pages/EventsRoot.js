import React from 'react'
import { Outlet } from 'react-router-dom'
import EventsNavigations from '../components/EventsNavigation';

const EventsRootLayout = () => {
  return (
    <>
        <EventsNavigations />
        <Outlet />
    </>
  )
}

export default EventsRootLayout