import React from 'react'
import "./Outreaches.css"
import EventCard from '../../../components/EventCard/EventCard'
import { Link, useLocation } from 'react-router-dom'
import OptimizedImage from '../../../components/OptimizedImage/OptimizedImage'
import { CircularProgress } from '@mui/material'
import ConnectCard from '../../../components/ConnectCard/ConnectCard'

const items = [
  { title: "Prayer Requests", route: '/more/community/outreaches', desc: 'Submit your prayer requests. And we will pray with you very very soon. ', imgUrl: '/assets/abstract-4.jpg' },
  { title: "Become A Member", route: '/join-us', desc: 'Join Us by becoming a member', imgUrl: '/assets/abstract-5.jpg' },
  { title: "SODIP(Soteria Discipleship)", route: '/community/sodip', desc: 'Partake in Soteria Discipleship', imgUrl: '/assets/abstract-2.jpg' },  
]


const Outreaches = () => {
  return (
    <div>Outreaches</div>
  )
}

export default Outreaches