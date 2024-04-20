import React, { Suspense, lazy } from 'react'
import './EventsList.css'
import { CircularProgress } from "@mui/material";

const EventCard = lazy(() => import('../EventCard/EventCard'))

const EventsList = ({ events }) => {
  // const events = [
  //   {
  //     title: "Women\'s Breakfast Meeting",
  //     desc: "Lorem Ipsum",
  //     dateTimeString: '2024-04-19T20:48:00',
  //     location: 'Soteia Church, Woodlawn, Maryland',
  //     type: 'women',
  //     imgUrl: '/assets/abstract-1.jpg'
  //   },
  //   {
  //     title: "Men\'s Breakfast Meeting",
  //     desc: "Lorem Ipsum",
  //     dateTimeString: '2024-04-19T20:48:00',
  //     location: 'Soteia Church, Woodlawn, Maryland',
  //     type: 'men',
  //     imgUrl: '/assets/abstract-2.jpg'
  //   },
  //   {
  //     title: "Men\'s Breakfast Meeting",
  //     desc: "Lorem Ipsum",
  //     dateTimeString: '2024-04-19T20:48:00',
  //     location: 'Soteia Church, Woodlawn, Maryland',
  //     type: 'men',
  //     imgUrl: '/assets/abstract-3.jpg'
  //   }
  //   ,
  //   {
  //     title: "Men\'s Breakfast Meeting",
  //     desc: "Lorem Ipsum",
  //     dateTimeString: '2024-04-19T20:48:00',
  //     location: 'Soteia Church, Woodlawn, Maryland',
  //     type: 'men',
  //     imgUrl: '/assets/abstract-4.jpg'
  //   },
  //   {
  //     title: "Men\'s Breakfast Meeting",
  //     desc: "Lorem Ipsum",
  //     dateTimeString: '2024-04-19T20:48:00',
  //     location: 'Soteia Church, Woodlawn, Maryland',
  //     type: 'men',
  //     imgUrl: '/assets/abstract-1.jpg'
  //   }
  // ]
  console.log("events", events)
  return (
    <>
      {events ? <div className="events-list">
         {events.map((event, index) => (
          <EventCard event={event.attributes} />

        )) }
      </div>
      :
      <><CircularProgress color='success' /></>
      }
      {/* <CircularProgress color='success' /> */}
    </>

  )
}

export default EventsList