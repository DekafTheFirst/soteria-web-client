import React from 'react'
import "./Connect.css"
import EventCard from '../../components/EventCard/EventCard'
import { Link } from 'react-router-dom'
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage'
import { CircularProgress } from '@mui/material'

const items = [
  { title: "Prayer Requests", route: '/connect/prayer-requests', desc: 'Submit your prayer requests. And we will pray with you very very soon. And we need a verse for the swifties', imgUrl: '/assets/abstract-4.jpg' },
  { title: "Become A Member", route: '/join-us', desc: 'Join Us by becoming a member', imgUrl: '/assets/abstract-5.jpg' },
  { title: "SODIP(Soteria Discipleship)", route: '/connect/sodip', desc: 'Partake in Soteria Discipleship', imgUrl: '/assets/abstract-2.jpg' },

  
]

const ConnectCard = ({ item }) => {
  return (
    <Link className="card-component connect-card" to={
      {
        pathname: `${item.route}`,

      }
    }>
      <OptimizedImage src={`${item.imgUrl}`} className='img' />
      <h5 className='title'>
        {item.title}
      </h5>
      <p className='desc'>{`${item.desc.length < 80 ? item.desc : `${item.desc.substring(0, 80)}...` } `}</p>
    </Link>
  )

}
const Connect = () => {
  return (
    <div className='connect-page'>
      <div className="container-fluid">
        {items ? <div className="cards">
          {items.map((item, index) => (
            <ConnectCard item={item} key={item.slug} />
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