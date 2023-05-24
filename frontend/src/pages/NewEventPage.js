import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router-dom';
import { action } from './EventDetail';

const NewEventPage = () => {

  return (
    <EventForm method="post" />
  )
}

export default NewEventPage;
