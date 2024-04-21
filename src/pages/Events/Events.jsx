import React, { useEffect, useState } from 'react'
import { fetchEvents } from '../../api/strapi'
import EventsList from '../../components/EventsList/EventsList'
import Banner from '../../components/Banner/Banner'

import './Events.css'

const Events = () => {
  const [events, setEvents] = useState(null)

  useEffect(() => {
    const fetchEventsData = async () => {
      const response = await fetchEvents()
      const eventsData = response.data
      setEvents(eventsData)
    }
    if (!events) fetchEventsData()
  }, [events])


  return (
    <div className="events-page">
      <section className="container-fluid">
        <EventsList events={events} />
      </section>
    </div>
  )
}

export default Events