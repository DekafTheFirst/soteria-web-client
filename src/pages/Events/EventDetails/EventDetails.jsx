import React from 'react'
import "./EventDetails.css"
import ReactPlayer from 'react-player'
import { Link, useLocation, useParams } from 'react-router-dom';
import Today from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OptimizedImage from '../../../components/OptimizedImage/OptimizedImage';
import { formatDate, formatTime } from '../../../utils/time';


const EventDetails = () => {
    const event = useLocation().state.event;
    console.log(event)
    return (
        <div className="event-details-page">
            <div className='container-fluid'>
                <div className="row align-items-start gx-3">
                    <div className="col-xl-6 p-3">
                        <OptimizedImage src={`${import.meta.env.VITE_BASE_URL}${event.image.data.attributes.formats.medium?.url ? event.image.data.attributes.formats.medium?.url : event.image.data.attributes.url}`} className='img' />
                        {/* <ReactPlayer url={sermon.youtubeLink} width={"100%"} height={"100%"} className="youtube-video" controls youtube /> */}
                    </div>
                    <div className="col-xl-6 p-3">
                        <div className="details">
                            <h2 className='item title'>
                                {event.title}
                            </h2>
                            {/* <div className='item preacher'> <PersonOutlineIcon /> <span>{sermon.preacher}</span></div> */}
                            {event.date && <div className='item item-with-icon date'> <Today className='icon'/> <span>{formatDate(event.date)}</span></div>}
                            {event.time && <div className='item item-with-icon time'> <AccessTimeIcon className='icon'/> <span>{formatTime(event.time)}</span></div>}

                            <div className='item mt-2 overview'>
                                <span className='fw-bold'>Overview: </span>
                                <p>{event.description}</p>
                            </div>
                            {event.registerationLink && <Link className="registeration-btn btn-green-solid mt-4" to={event.registerationLink}>
                                Register
                            </Link>}
                        </div>
                        {/* <Link className="btn-green-solid mt-3" to={soteriaYoutubeLink}>
                            Watch More Sermons
                        </Link> */}
                    </div>

                </div>


            </div>
        </div>
        
    )
}

export default EventDetails