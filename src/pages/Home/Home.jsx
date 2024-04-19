import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import TodayIcon from '@mui/icons-material/Today';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Timer from '../../components/Timer/Timer';

import { fetchEvents } from '../../api/Events';

import MySwiper from '../../components/Swiper/MySwiper';
import MediaCard from '../../components/MediaCard/MediaCard';

const Home = ({ scrolled }) => {
  const [events, setEvents] = useState(null)

  useEffect(() => {
    const fetchEventsData = async () => {
      const response = await fetchEvents()
      const eventsData = response.data
      setEvents(eventsData)
      console.log(eventsData)
    }
    if (!events) fetchEventsData()
  }, [events])

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
              <Link to="/company" className='page-btn'>What's Next <ArrowForwardIcon fontSize='21' className='icon' /></Link>
            </div>
          </div>

          <div className="event-countdown-card-wrapper">
            <div className="event-countdown-card">
              <OptimizedImage src="/assets/sermon.jpg" className="img" alt="event-countdown-card-img" blurhash="LcLEHB~pIUIU_4xvt7j@E2NHRjof" />
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
                <Timer targetDateStr={"2024-04-19T20:48:00"} />
              </div>
            </div>
          </div>

        </div>


        <div className="hero-img-wrapper">
          <MySwiper />
          {/* <OptimizedImage src="/assets/preaching.jpg" className="hero-img"  alt="hero-img" blurhash="LcLEHB~pIUIU_4xvt7j@E2NHRjof" /> */}
        </div>
        {/* <img src="/assets/preaching.jpg" className="hero-img" alt="hero-img" /> */}

      </section>



      <section className="reputation">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-6 media-card-wrapper">
                <MediaCard />
            </div>
            <div className="col-md-6 content">
              <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus itaque quia aspernatur excepturi nobis non, impedit voluptatem consequatur ducimus qui ullam? Voluptatibus.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nisi doloribus perferendis laboriosam. Mollitia minus dicta, aut libero ipsam tempora, dolorum temporibus voluptas possimus voluptatem ex commodi modi et quidem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nisi doloribus perferendis laboriosam. Mollitia minus dicta, aut libero ipsam tempora, dolorum temporibus voluptas possimus voluptatem ex commodi modi et quidem!
              </p>
              <Link to="/company"><PlayCircleIcon fontSize='large' /> Learn More </Link>
            </div>
          </div>


        </div>
      </section>

    </div>

  )
}

export default Home