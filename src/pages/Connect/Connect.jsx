import React from 'react'
import "./Connect.css"
import EventCard from '../../components/EventCard/EventCard'
import { Link, useLocation } from 'react-router-dom'
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage'
import { CircularProgress } from '@mui/material'
import ConnectCard from '../../components/ConnectCard/ConnectCard'

const items = [
  { title: "Men's Fellowship(Daniel's Men)", route: '/connect/daniels-men', desc: 'The Daniel’s Men is the Men’s Brotherhood and Fellowship of Soteria Church.', imgUrl: '/assets/men-small.jpg' },
    { title: "Women's Fellowship(POIEMA)", route: '/connect/poiema', desc: 'Poiema (Poy- ah- mah) is the Women’s Ministry of Soteria Church. ', imgUrl: '/assets/poima.jpg' },
    { title: "Soteria kiddies", route: '/connect/kiddies', desc: 'Kiddies time with God.', imgUrl: '/assets/soteria-kiddies.jpg' },
  { title: "Prayer Requests", route: '/connect/prayer-requests', desc: 'Submit your prayer requests. And we will pray with you very very soon. ', imgUrl: '/assets/abstract-4-small.jpg' },
  { title: "Become A Member", route: '/join-us', desc: 'Join Us by becoming a member', imgUrl: '/assets/abstract-5-small.jpg' },
  { title: "SODIP(Soteria Discipleship)", route: '/connect/sodip', desc: 'Partake in Soteria Discipleship', imgUrl: '/assets/abstract-2-small.jpg' },

  
]


const Connect = () => {
  return (
    <div className='connect-page'>
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

export default Connect