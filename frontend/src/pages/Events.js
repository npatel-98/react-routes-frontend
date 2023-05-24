import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

const EventsPage = () => {
    const { events } = useLoaderData();
    return (
        <Suspense fallback={<p style={{textAlign: 'center'}} > Loading events from Events...</p>}>
            <Await resolve={events} >
            {
                (loadedEvents) => <EventsList events={loadedEvents} />
            }
            </Await>
        </Suspense>
    )
}

export default EventsPage;

async function loadEvents(){
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        return json({ message: "could not fetch data"}, { status: 500,})
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export function loader(){
    return defer({
        events: loadEvents(),
    });
}