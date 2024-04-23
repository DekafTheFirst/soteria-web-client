import React from 'react'
import OptimizedImage from '../OptimizedImage/OptimizedImage'
import "./SermonCard.css"
import TodayIcon from '@mui/icons-material/Today';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import ReactPlayer from 'react-player/lazy'

const SermonCard = ({ sermon, shouldIncludeDescription }) => {
    console.log(sermon)
    return (
        <div className="card-component sermon-card">
            {/* <OptimizedImage src="/assets/abstract-1.jpg" className='img' blurhash="LWH.4sD+$%kX~poeNFx]?Ht7WBxu" /> */}
            <ReactPlayer url={sermon.youtubeLink} className="youtube-video" />
            <h4 className='title'>
                {sermon.title}
            </h4>
            <div className="details">
                <div className='item preacher'> <PersonOutlineIcon /> <span>{sermon.preacher}</span></div>
                <div className='item date'> <TodayIcon /><span>{sermon.date}</span></div>
            </div>

            {shouldIncludeDescription &&
                <p>
                    {sermon.desc}
                </p>
            }
        </div>
    )
}

export default SermonCard