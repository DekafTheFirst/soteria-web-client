import React from 'react'
import OptimizedImage from '../OptimizedImage/OptimizedImage'
import "./SermonCard.css"
import TodayIcon from '@mui/icons-material/Today';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import ReactPlayer from 'react-player/lazy'

const SermonCard = ({ sermon, shouldIncludeDescription }) => {
    return (
        <div className="card-component sermon-card">
            <ReactPlayer url={sermon.youtubeLink} className="youtube-video" width={"100%"} height={"100%"} />
            <h4 className='title'>
                {sermon.title}
            </h4>
            <div className="details">
                <div className='item preacher'> <PersonOutlineIcon /> <span>{sermon.preacher}</span></div>
                <div className='item date'> <TodayIcon /><span>{sermon.date}</span></div>
            </div>
            <p>
                {sermon.desc}
            </p>
        </div>
    )
}

export default SermonCard