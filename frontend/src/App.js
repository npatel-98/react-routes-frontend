// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/HomePage';
// import EventsPage from './pages/EventsPage';
// import NewEventPage, { action as newEventAction } from './pages/NewEventPage'
import NewEventPage from './pages/NewEventPage'
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetail'
import EditEventPage from './pages/EditEventPage'
import RootLayout from './RootLayout';
import EventsRoot from './pages/EventsRoot';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { 
          index: true, 
          element: <Homepage />
        },
        { 
          path: 'events', 
          element: <EventsRoot />,
          children: [
            { 
              index: true, 
              element: <EventsPage />,
              loader: eventsLoader,
            },
            {
              path: ':eventId',
              id: 'event-detail',
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction,
                },
                { 
                  path:"edit", 
                  element: <EditEventPage />,
                  action: manipulateEventAction,
                },
              ]
            },
            { 
              path:"new", 
              element: <NewEventPage />,
              action: manipulateEventAction,
            },
          ]
        },
        // {
        //   path: "/events/:eventId",
        //   id: "event-detail",
        //   loader: eventDetailLoader,
        //   children: [
        //     {
        //       index: true,
        //       element: <EventDetailPage />,
        //       action: deleteEventAction,
        //     }

        //   ]
        // }
      ]
    }
  ])
  
  return <>
    {/* <h2>ffff</h2> */}
    <RouterProvider router={router}>
    </RouterProvider>
    {/* <Routes>
      <Route index="/" element={<Homepage />}></Route>
      <Route path="/events" element={<EventsPage />}></Route>
      <Route path="/events:eventId" element={<EventDetailPage />}></Route>
      <Route path="/events/new" element={<NewEventPage />}></Route>
      <Route path="/events/:eventId/edit" element={<EditEventPage />}></Route>
    </Routes> */}
  </>;
}

export default App;