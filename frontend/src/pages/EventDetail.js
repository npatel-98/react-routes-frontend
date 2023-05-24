import React, { Suspense } from 'react'
import { Await, json, redirect, useRouteLoaderData, defer } from 'react-router-dom'
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

const EventDetailPage = () => {
  console.log("fffff")
  const test =  useRouteLoaderData('event-detail');
  // console.log("this is log:", usetjos);
  const event = test.event;

  return (
    <>
      <Suspense fallback={ <p style={{textAlign: 'center' }}>Loading Event detail...</p>}>
        <Await resolve={event}>
          {
            loadedEvent =>  <EventItem event={loadedEvent} />
          }
        </Await>
      </Suspense>
      {/* <Suspense fallback={ <p style={{textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {
            loadedEvents => <EventsList events={loadedEvents} />
          }
        </Await>
      </Suspense> */}
    </>
  )
}

export default EventDetailPage;


async function loadEvent(id){
  console.log("Event ID :",id);
  const response = await fetch('http://localhost:8080/events/'+id);
  
  if(!response.ok){
    throw json({message:"Could not fetch details of selected event"}, {
      status: 500,
    })
  }else{
    const resData = await response.json();
    console.log("into correct:",resData);
    return resData.event;
  }
  
}

async function loadEvents(){
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
      //...
      // return { isError: true, message: "Could not fetch events."};
      // throw new Response( JSON.stringify({ message: "Could not fetch events"}), { status: 500} );
      return json({ message: "could not fetch data"}, { status: 500,})
  } else {
      const resData = await response.json();
      return resData.events;
  }
}

export async function loader({request, params}){
  console.log("into loader");
  const id = params.eventId;
  const getEvent = await loadEvent(id);
  console.log("this is event: ",getEvent);

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  })

}

export async function action({ params, request }){
  const eventId = params.eventId;
  const resp = fetch ("http://localhost:8080/events/"+eventId, {
    method: request.method
  });
  if(!resp.ok){
    throw json({message:"Could not delete event"}, {
      status: 500,
    })
  }

  return redirect('/events');
  
}