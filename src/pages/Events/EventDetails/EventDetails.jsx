import React from 'react'
import "./EventDetails.css"
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom';
import Today from '@mui/icons-material/Today';

const EventDetails = () => {
    const event= useLocation().state;
    console.log(event)
    return (
        <div className="watch-page">
            <div className='container-fluid'>
                <div className="row align-items-start gx-3">
                    <div className="col-xl-7 p-3">
                        {/* <ReactPlayer url={sermon.youtubeLink} width={"100%"} height={"100%"} className="youtube-video" controls youtube /> */}
                    </div>
                    <div className="col-xl-5 p-3">
                        <div className="details">
                            <h4 className='item title'>
                                {event.title}
                            </h4>
                            {/* <div className='item preacher'> <PersonOutlineIcon /> <span>{sermon.preacher}</span></div> */}
                            <div className='item date'> <Today /> <span>{event.date}</span></div>
                            <p className='item'>
                                {event.description}
                            </p>
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