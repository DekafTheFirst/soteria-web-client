import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import TodayIcon from '@mui/icons-material/Today';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Timer from '../../components/Timer/Timer';
import { fetchEvents } from '../../api/Events';

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

            <div className="buttons">
              <Link to="/company" className='page-btn'>What's Next <ArrowForwardIcon fontSize='21' className='icon' /></Link>
            </div>
          </div>
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



        <div className="dotted"></div>
        <OptimizedImage src="/assets/preaching.jpg" className="hero-img" alt="hero-img" blurhash="LcLEHB~pIUIU_4xvt7j@E2NHRjof" />
        {/* <img src={require("../imgs/quantum-ex-capital-solutions/finance.jpg")} className="hero-img" alt="hero-img" backgroundImage/> */}

      </section>

      <div className="eventList">
      </div>
    </div>

  )
}

export default Home