import React from 'react'
import "./Community.css"
import EventCard from '../../components/EventCard/EventCard'
import { Link, useLocation } from 'react-router-dom'
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage'
import { CircularProgress } from '@mui/material'
import ConnectCard from '../../components/ConnectCard/ConnectCard'

const items = [
  { title: "Outreaches / Community Engagement", route: '/community-engagement/outreaches', desc: 'Soteria church loves to engage with the community. ', imgUrl: '/assets/community-outreach.jpg' },
  { title: "July 4th (Fun in the Sun)", route: '/community-engagement/fun-in-the-sun', desc: 'Join Us to have fun in the sun on July 4th', imgUrl: '/assets/fun-in-the-sun.jpg' },
  { title: "Vulnerable Peoples Ministry and Service", route: '/community-engagement/vulnerable-peoples-ministry-and-service', desc: 'We believe in giving back to the community and helping those around us', imgUrl: '/assets/vulnurable-people-ministry.jpg' },  
]


const Community = () => {
  return (
    <div className='community-page'>
      <div className="container-fluid">
        {items ? <div className="cards">
          {items.map((item, index) => (
            <ConnectCard item={item} key={index} />
          ))}
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

export default Community