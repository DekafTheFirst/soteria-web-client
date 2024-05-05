import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';

import './Home.css'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import TodayIcon from '@mui/icons-material/Today';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Timer from '../../components/Timer/Timer';

import { fetchEvents, fetchUpcomingEvents } from '../../api/strapi';

import MySwiper from '../../components/Swiper/MySwiper';
import SermonCard from '../../components/SermonCard/SermonCard';
import EventCard from '../../components/EventCard/EventCard';
import EventsList from '../../components/EventsList/EventsList';
import { Skeleton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';

const Home = () => {
  const [events, setEvents] = useState(null)
  const [error, setError] = useState(null)

  const location = useLocation()

  const fetchEventsData = async () => {
    const { response, error } = await fetchUpcomingEvents(3)
    if (error) {
      console.log(error)
      setError(error)
    }
    else {
      const eventsData = response.data
      setEvents(eventsData)
    }
  }

  useEffect(() => {

    if (!events) fetchEventsData()
  }, [events])

  const upcomingEvent = events && events[0].attributes

  return (
    <div className="home">
      <section className="hero">
        <div className="container-fluid">
          <div className="content">
            <div className="text">
              <h1>
                Welcome To
                Soteria Church
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce malesuada in nunc a
                placerat. In scelerisque eros et ipsum gravida
                porta. Nullam volutpat eros a tempus
                efficitur.
              </p>
            </div>

            <div className="buttons">
              <Link to="/about-us" className='btn-gold-solid'>What's Next <ArrowForwardIcon fontSize='21' className='icon' /></Link>
            </div>
          </div>

          <div className="event-countdown-card-wrapper">
            <div className="event-countdown-card">
              <OptimizedImage src="/assets/sermon-thumbnail.jpg" className="img" alt="event-countdown-card-img" blurhash="LcLEHB~pIUIU_4xvt7j@E2NHRjof" />
              <div className="details">
                <h5 className='title'>Upcoming Event With A Title</h5>
                <div className="item">
                  <TodayIcon className="icon" />
                  <span>Monday 20th - Teusday 21 April 2021</span>
                </div>
                <div className="item">
                  <LocationOnOutlinedIcon className="icon" />
                  <span>Woodlawn, Maryland, Baltimore, USA.</span>
                </div>
                <div className="register"><Link>Register</Link><KeyboardArrowRightOutlinedIcon className='icon' /> </div>
              </div>
              <div className="countdown">
                {upcomingEvent && <Timer targetDateStr={`${upcomingEvent?.date}T${upcomingEvent?.time}`} />}

              </div>
            </div>
          </div>

        </div>


        <div className="hero-img-wrapper">
          <MySwiper />
        </div>

      </section>



      <section className="about-us">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-6 media-card-wrapper">
              <SermonCard sermon={
                {
                  title: 'Trusting the word of God',
                  preacher: 'Pst. John Doe',
                  date: '12-09-2024', id: 1,
                  youtubeLink: "https://www.youtube.com/watch?v=dew9OyZTRAs",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, leo ultricies imperdiet elementum, diam justo euismod odio, in ultrices urna quam non libero. Duis et erat congue, semper arcu sit amet, dapibus eros. Vivamus convallis ipsum est, eu pellentesque ante congue sed. "
                }
              } />
            </div>
            <div className="col-md-6 content">
              <h2>The Church that Cares</h2>
              <p>
                Soteria Church is a multiracial, multi-ethnic, multicultural and multigenerational community of people who know Jesus personally, love Jesus passionately, serve Jesus purposefully and share Jesus powerfully!               </p>
              <p>
                Soteria Church is a place where diversity is celebrated and unity is cherished. As a multiracial, multi-ethnic, multicultural, and multigenerational community, we come together with a shared passion for knowing Jesus personally, loving Him passionately, serving Him purposefully, and sharing His transformative power with others. Our vibrant congregation is a reflection of the rich tapestry of God's creation, and we are committed to walking alongside one another, supporting and encouraging each other as we journey together in faith.              </p>
              <Link to="/company"><PlayCircleIcon fontSize='large' /> Learn More </Link>
            </div>
          </div>


        </div>
      </section>

      <section className="events">
        <div className="container-fluid">
          <h4>Upcoming Events</h4>
          <EventsList events={events} error={error} />
        </div>
        {/* <EventCard /> */}
      </section>

    </div>

  )
}

export default Home