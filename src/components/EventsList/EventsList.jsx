import React, { Suspense, lazy, useEffect, useState } from 'react'
import './EventsList.css'
import { CircularProgress } from "@mui/material";

const EventCard = lazy(() => import('../EventCard/EventCard'))

const EventsList = ({ events, error }) => {
  const [isRetrying, setIsRetrying] = useState(false)
  console.log(error)
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
  // useEffect(()=>{
  //   let icon;
  //   if(isRetrying) {

  //   }
  // }, [isRetrying])


  return (
    <div className='events-list'>
      <div className="wrapper">
        {events ? <div className="cards">
          {events.map((event, index) => (
            <EventCard eventObject={event} key={event.id} />
          ))}
        </div>
          :
          error ?
            <div className="error-container">
              <span className='text-center text-danger mx-auto'>Error fetching events</span>
            </div>
            :
            <div className='loader-wrapper'>
              <CircularProgress color='success' />
            </div>
        }
      </div>


      {/* <div className='loader-wrapper'>
        <CircularProgress color='success' />
      </div> */}

    </div>

  )
}

export default EventsList