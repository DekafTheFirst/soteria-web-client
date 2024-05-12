import React from 'react'
import OptimizedImage from '../OptimizedImage/OptimizedImage'
import "./SermonCard.css"
import TodayIcon from '@mui/icons-material/Today';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import ReactPlayer from 'react-player/lazy'
import { formatDate } from '../../utils/time';
import { truncatedText } from '../../utils/truncatedText';
import { CircularProgress } from '@mui/material';

const SermonCard = ({ sermon, shouldIncludeDescription }) => {
    return (
        <>
            {
                sermon ? (
                    <div className="card-component sermon-card" >
                        <ReactPlayer url={sermon.youtubeLink} className="youtube-video" width={"100%"} height={"100%"} />
                        <h4 className='title'>
                            {sermon.title}
                        </h4>
                        <div className="details">
                            <div className='item preacher'> <PersonOutlineIcon fontSize='medium' /> <span>{sermon.preacher}</span></div>
                            <div className='item date'> <TodayIcon fontSize='medium' /><span>{formatDate(sermon.date)}</span></div>
                            <p className='description'>
                                {truncatedText(sermon.description, 250)}
                            </p>
                        </div>
                    </div >
                ) :  <CircularProgress />}
        </>

    )
}

export default SermonCard