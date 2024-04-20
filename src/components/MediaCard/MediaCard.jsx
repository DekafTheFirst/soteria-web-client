import React from 'react'
import OptimizedImage from '../OptimizedImage/OptimizedImage'
import "./MediaCard.css"
import TodayIcon from '@mui/icons-material/Today';

import ReactPlayer from 'react-player/lazy'

const MediaCard = () => {
    return (
        <div className="card-component media-card">
            {/* <OptimizedImage src="/assets/abstract-1.jpg" className='img' blurhash="LWH.4sD+$%kX~poeNFx]?Ht7WBxu" /> */}
            <ReactPlayer url='https://www.youtube.com/live/VQjnqQq2X6I?si=FmOBZsVCIVY55ZQq' className="youtube-video" />
            <h4 className='title'>
                Soteria Church WAPCON 2024 Sunday Service
            </h4>
            <span className='date'> <TodayIcon /> Apr 14, 2024</span>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus itaque quia aspernatur excepturi nobis non, impedit voluptatem consequatur ducimus qui ullam? Voluptatibus.
            </p>
        </div>
    )
}

export default MediaCard