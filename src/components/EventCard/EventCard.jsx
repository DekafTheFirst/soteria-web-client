import React, { useEffect } from 'react'
import OptimizedImage from '../OptimizedImage/OptimizedImage'
import "./EventCard.css"
import TodayIcon from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link, useNavigate } from 'react-router-dom';
import { formatDate, formatTime } from '../../utils/time';


const EventCard = ({ eventObject }) => {
    
    const event = eventObject.attributes;
    const navigate = useNavigate()
    // console.log(event);


    useEffect(()=>{
    }, [event])

    const thumbnailFormatUrl = event.image.data.attributes.formats.thumbnail?.url
    const smallFormatUrl = event.image.data.attributes.formats.small?.url
    // console.log(event.title, 'thumbnail:', thumbnailFormatUrl, 'small:', smallFormatUrl, )
    return (
        <div className="card-component event-card" onClick={() => navigate(`/event-details?title=${event.slug}&id=${eventObject.id}`, { state: { event } })}>
            <OptimizedImage src={`${import.meta.env.VITE_BASE_URL}${smallFormatUrl ? smallFormatUrl : thumbnailFormatUrl}`} className='img' />
            <h5 className='title'>
                {event.title}
            </h5>
            {event.startDate && <span className='date'><TodayIcon /> {`${formatDate(event.startDate)}  ${event.endDate ? `- ${formatDate(event.endDate)}` : ''}`}</span>}
            {event.time && <span className='date'><AccessTimeIcon /> { formatTime(event.time)}</span>}
        </div>
    )
}

export default EventCard