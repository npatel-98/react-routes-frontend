import React from 'react'
import { Link } from 'react-router-dom'

const EventsPage = () => {

  const DUMMY_EVENTS = [
    {
      id: 1,
      title: "Musical Nights",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 2,
      title: "Just Workout",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 3,
      title: "Yoga Therapy",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 4,
      title: "Starbucks Coffees",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
  ]
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        { DUMMY_EVENTS.map( (event) => {
          return (
            <li key={event.id}>
              <Link to={`/events/${event.id}`}>{event.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
    
  )
}

export default EventsPage