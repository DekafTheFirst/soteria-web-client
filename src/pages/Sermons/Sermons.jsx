import React, { useEffect, useState } from 'react'
import "./Sermons.css"
import { CircularProgress } from '@mui/material'
import ConnectCard from '../../components/ConnectCard/ConnectCard'
import { Link } from 'react-router-dom'
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage'
import { fetchSermons } from '../../api/strapi/index';




const Sermons = () => {
  const [items, setItems] = useState(null);




  useEffect(() => {
    const fetchEventsData = async () => {

      const response = await fetchSermons()
      console.log('response', response)
      const eventsData = response?.response?.data
      console.log('url', import.meta.env.VITE_BASE_URL)
      setItems(eventsData)


    }
    if (!items) fetchEventsData()
  }, [items])

  return (
    <div className='connect-page'>
      <div className="container-fluid">
        {items ? <div className="cards">
          {items.map((item, index) => (
            <a key={index} className="card-component sermon-rec-card connect-card"
              href={`${import.meta.env.VITE_BASE_URL}${item?.attributes?.audio?.data?.[0]?.attributes?.url}`}
            >
              <div className="img">
                <img src={item?.attributes?.backgroundImage?.data?.[0]?.attributes?.url ?
                  `${import.meta.env.VITE_BASE_URL}${item?.attributes?.backgroundImage?.data?.[0]?.attributes?.url} ` : `/assets/record-img.jpg`} />
                <img src={`/assets/play-btn.svg`} className='play-btn' />

              </div>

              <h5 className='title'>
                {item?.attributes?.title}
              </h5>
              <p className='text-muted'>{item?.attributes?.preacher}</p>
            </a>))}
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

export default Sermons