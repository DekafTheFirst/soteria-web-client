import React from 'react'
import './ConnectCard.css'
import { Link } from 'react-router-dom'
import OptimizedImage from '../OptimizedImage/OptimizedImage'

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

export default ConnectCard