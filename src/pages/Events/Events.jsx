import React, { useEffect, useRef, useState } from 'react'
import { fetchEvents } from '../../api/strapi'
import EventsList from '../../components/EventsList/EventsList'

import './Events.css'



const Events = () => {
  const [events, setEvents] = useState(null)
  const [error, setError] = useState(null)


  // Filter Logic
  const filters = ['All', 'Men', 'Women', 'Children', 'Youths', 'Others'];
  const [currentFilter, setCurrentFilter] = useState(filters[0])
  const handleFilterClick = (filter) => {
    setCurrentFilter(filter)
  }

  const filterRef = useRef(null);
  const [filterHeight, setFilterHeight] = useState(0);

  useEffect(() => {
    if (filterRef.current) {
      const height = filterRef.current.clientHeight;
      setFilterHeight(height);
    }
  }, []);



  useEffect(() => {
    const fetchEventsData = async () => {
      const {response , error} = await fetchEvents()
      if (error) {
        console.log(error)
        setError(error)
      }
      else {
        const eventsData = response.data
        setEvents(eventsData)
      }
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

  // Logic For Handling Scroll
  const [isSticky, setIsSticky] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector('.navbar').offsetHeight; // Height of the navbar
      const bannerHeight = document.querySelector('.banner').offsetHeight;
      const filterOffset = bannerHeight - navbarHeight;
      // The isn't the true offset value but the one i'll be using to give space for the navbar since the navbar is also sticky.

      setIsSticky(() => {
        if (window.scrollY > filterOffset) {
          return true
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="events-page">
      <ul className={`filter ${isSticky ? 'sticky' : ''}`} ref={filterRef}>
        <div className="container-fluid">
          {filters.map((filter, index) => (
            <li className={`filter-item ${currentFilter == filter ? "active" : ""}`} key={index} onClick={() => handleFilterClick(filter)}>{filter}</li>
          ))}
        </div>
      </ul>
      <div
        className={`events`}
        style={isSticky ? { paddingTop: filterHeight } : {}}      
        >
        <div className="container-fluid">
          <EventsList events={filteredEvents} error={error} />
        </div>
      </div>
    </div>
  )
}

export default Events