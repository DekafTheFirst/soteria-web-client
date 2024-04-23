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

  
  return (
    <div className='events-list'>
      {events ? <div className="cards">
         { events.map((event, index) => (
          <EventCard eventObject={event} key={event.id}/>
        ))}
      </div>
      :
      <div className='loader-wrapper'>
        <CircularProgress color='success' />
      </div>
      }

      {/* <div className='loader-wrapper'>
        <CircularProgress color='success' />
      </div> */}

    </div>

  )
}

export default EventsList