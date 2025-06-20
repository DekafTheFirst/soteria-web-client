import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import './Home.css'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import TodayIcon from '@mui/icons-material/Today';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Timer from '../../components/Timer/Timer';

import { fetchEvents, fetchUpcomingEvents, getLatestSermon } from '../../api/strapi';

import MySwiper from '../../components/Swiper/MySwiper';
import SermonCard from '../../components/SermonCard/SermonCard';
import EventCard from '../../components/EventCard/EventCard';
import EventsList from '../../components/EventsList/EventsList';
import { CircularProgress, Skeleton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { formatDate, rangeOfDates } from '../../utils/time';

const Home = () => {
  const [upcomingEvents, setUpcomingEvents] = useState(null)
  const [recentEvents, setRecentEvents] = useState(null)

  const [latestSermon, setLatestSermon] = useState(null)

  const [error, setError] = useState(null)
  const [latestSermonError, setLatestSermonError] = useState(null)


  // const getRecentEventsInstead = async () => {
  //   const { response, error } = await fetchRecentEvents(3);
  //   const recentEventsArray = response.data;

  //   if (error) {
  //     setError(error);
  //   }
  //   else {
  //     console.log(recentEventsArray)
  //     setUpcomingEvents(recentEventsArray)
  //   }
  // }
  console.log(upcomingEvents)
  console.log(error)
  const fetchEventsData = async () => {
    const { response, error } = await fetchUpcomingEvents(3)
    if (error) {
      setError(error)
    }
    else {
      const upcomingEventsArray = response.data;
      if (upcomingEventsArray.length <= 0) {
        setUpcomingEvents(null)
      }
      else {
        setUpcomingEvents(upcomingEventsArray)
      }
    }
  }

  useEffect(() => {
    if (!upcomingEvents) fetchEventsData()
  }, [upcomingEvents])



  let upcomingEvent, upcomingEventThumbnailFormatUrl, upcomingEventImageSmallFormatUrl, upcomingEventDate;
  // console.log(upcomingEvents)
  if (upcomingEvents && upcomingEvents.length) {
    upcomingEvent = upcomingEvents && upcomingEvents[0].attributes;
    upcomingEventThumbnailFormatUrl = upcomingEvent?.image.data.attributes.formats.thumbnail?.url
    upcomingEventImageSmallFormatUrl = upcomingEvent?.image.data.attributes.formats.small?.url
    upcomingEventDate = upcomingEvent?.endDate ? rangeOfDates(upcomingEvent.startDate, upcomingEvent.endDate) : formatDate(upcomingEvent.startDate);
  }




  // Fetch Latest Sermon
  const fetchLatestSermon = async () => {
    const { latestSermon, error } = await getLatestSermon()
    if (error) {
      setLatestSermonError(error)
    }
    else {
      setLatestSermon(latestSermon)
    }
  }

  useEffect(() => {
    if (!latestSermon) fetchLatestSermon()
  }, [latestSermon])

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
                We're delighted to have you here. Step into a place where every soul is valued, every heart is heard, and every journey is embraced.
              </p>
            </div>

            <div className="buttons">
              <Link to="/about-us" className='btn-gold-solid'>What's Next <ArrowForwardIcon fontSize='21' className='icon' /></Link>
            </div>
          </div>

          <div className="event-countdown-card-wrapper">
            {upcomingEvent ?
              (<div className="event-countdown-card">
                <div className="image-container">
                  {upcomingEvent ? <OptimizedImage src={`${import.meta.env.VITE_BASE_URL}${upcomingEventImageSmallFormatUrl ? upcomingEventImageSmallFormatUrl : upcomingEventThumbnailFormatUrl}`} className="img" alt="event-countdown-card-img" blurhash="LcLEHB~pIUIU_4xvt7j@E2NHRjof" /> : <CircularProgress color='success' />}
                </div>
                <div className="details">
                  <h5 className='title'>{upcomingEvent ? upcomingEvent.title : <Skeleton variant="text" sx={{ fontSize: '24px' }} />
                  }</h5>
                  <div className="item">
                    <TodayIcon className="icon" />
                    <span>{upcomingEvent ? upcomingEventDate : <Skeleton variant="text" sx={{ fontSize: '14px' }} />}</span>
                  </div>
                  <div className="item">
                    <LocationOnOutlinedIcon className="icon" />
                    <span>{upcomingEvent ? (upcomingEvent.venue === null ? '1928 Woodlawn Dr, Woodlawn, MD 21207, USA' : upcomingEvent.venue) : <Skeleton variant="text" sx={{ fontSize: '14px' }} />}</span>
                  </div>
                  {upcomingEvent?.registerationLink && <div className="register"><Link to={`${upcomingEvent?.registerationLink ? upcomingEvent?.registerationLink : ''}`}>Register</Link><KeyboardArrowRightOutlinedIcon className='icon' /> </div>}
                </div>
                <div className="countdown">
                  {upcomingEvent && <Timer date={upcomingEvent?.startDate} time={upcomingEvent?.time} />}
                </div>
              </div>) : (<CircularProgress color='success' />)
            }
          </div>

        </div>


        <div className="hero-img-wrapper">
          <MySwiper />
        </div>

      </section>



      <section className="about-us">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-6 media-card-wrapper d-flex justify-content-center">
              {latestSermonError ? <span className='text-danger'>Error Fetching Latest Sermon;</span> : <SermonCard sermon={latestSermon} />}
            </div>
            <div className="col-md-6 content">
              <span>Welcome To Soteria Church</span>
              <h2>The Church that Cares</h2>
              <p>
                Soteria Church is a place where diversity is celebrated and unity is cherished. As a multiracial, multi-ethnic, multicultural, and multigenerational community, we come together with a shared passion for knowing Jesus personally, loving Him passionately, serving Him purposefully, and sharing His transformative power with others. Our vibrant congregation is a reflection of the rich tapestry of God's creation, and we are committed to walking alongside one another, supporting and encouraging each other as we journey together in faith.              </p>
              <Link to="/about-us"><PlayCircleIcon fontSize='large' /> Learn More </Link>
            </div>
          </div>
        </div>
      </section>

      {upcomingEvents && <section className="upcomingEvents">
        <div className="container-fluid">
          <h4>Upcoming Events</h4>

          <EventsList events={upcomingEvents} error={error} />
        </div>
        {/* <EventCard /> */}
      </section>}

    </div>

  )
}

export default Home