import React from 'react'
import OptimizedImage from '../OptimizedImage/OptimizedImage'
import "./EventCard.css"
import TodayIcon from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link, useNavigate } from 'react-router-dom';
import { formatDate, formatTime } from '../../utils/time';


const EventCard = ({ eventObject }) => {
    const event = eventObject.attributes;

    return (
        <Link className="card-component event-card" to={
            {
                pathname: `/events/${eventObject.id}`,
               
            }
        } state={event}>
            <OptimizedImage src={`${import.meta.env.VITE_BASE_URL}${event.image.data.attributes.formats.small.url}`} className='img' />
            <h5 className='title'>
                {event.title}
            </h5>
            <span className='date'><TodayIcon /> {formatDate(event.date)}</span>
            <span className='date'><AccessTimeIcon /> {formatTime(event.time)}</span>
        </Link>
    )
}

export default EventCard