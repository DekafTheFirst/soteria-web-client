import React, { useEffect, useState } from 'react'
import { fetchEvents } from '../../api/strapi'
import EventsList from '../../components/EventsList/EventsList'

import './Events.css'



const Events = () => {
  const [events, setEvents] = useState(null)

  const filters = ['All', 'Men', 'Women', 'Children', 'Youths', 'Others'];
  
  const [currentFilter, setCurrentFilter] = useState(filters[0])

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter)
    console.log(filter)
  }


  useEffect(() => {
    const fetchEventsData = async () => {
      const response = await fetchEvents()
      const eventsData = response.data
      setEvents(eventsData)
    }
    if (!events) fetchEventsData()
  }, [events])

  const filteredEvents = events && events.filter(event => {
    if (currentFilter == "All") {
      return true;
    }

    if (currentFilter === "Others") {
      return event.attributes.type === null;
    }

    return event.attributes.type === currentFilter
  })

  console.log(filteredEvents)


  return (
    <div className="events-page">
      <div className="container-fluid">
        <ul className='filter'>
          {filters.map((filter, index) => (
              <li className={`filter-item ${currentFilter == filter ? "btn-green-solid":"btn-green-outline"}`} key={index} onClick={() => handleFilterClick(filter)}>{filter}</li>
          ))}
        </ul>
        <EventsList events={filteredEvents} />
      </div>
    </div>
  )
}

export default Events