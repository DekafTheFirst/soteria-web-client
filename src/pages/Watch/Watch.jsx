import React, { useEffect } from 'react';
import SermonCard from '../../components/SermonCard/SermonCard';
import "./Watch.css"
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import TodayIcon from '@mui/icons-material/Today';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



const sermon = { title: 'Trusting the word of God', preacher: 'Pst. John Doe', date: '12-09-2024', id: 1, youtubeLink: "https://www.youtube.com/watch?v=Y8IdYJQ0QYc", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, leo ultricies imperdiet elementum, diam justo euismod odio, in ultrices urna quam non libero. Duis et erat congue, semper arcu sit amet, dapibus eros. Vivamus convallis ipsum est, eu pellentesque ante congue sed. " }



// const sermons = [
//     { title: 'Trusting the word of God', preacher: 'Pst. John Doe', date: '12-09-2024', id: 1, youtubeLink: "https://www.youtube.com/watch?v=dew9OyZTRAs", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, leo ultricies imperdiet elementum, diam justo euismod odio, in ultrices urna quam non libero. Duis et erat congue, semper arcu sit amet, dapibus eros. Vivamus convallis ipsum est, eu pellentesque ante congue sed. " },
//     { title: 'Faith Work', preacher: 'Pst. Jane Doe', date: '12-09-2024', id: 2, youtubeLink: "https://www.youtube.com/watch?v=Y8IdYJQ0QYc", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, leo ultricies imperdiet elementum, diam justo euismod odio, in ultrices urna quam non libero. Duis et erat congue, semper arcu sit amet, dapibus eros. Vivamus convallis ipsum est, eu pellentesque ante congue sed. " },
//     { title: 'Divine inspiration service', preacher: 'Pst. Stranger Danger', date: '12-09-2024', id: 3, youtubeLink: "https://www.youtube.com/watch?v=q7zWxLABE1U&t=1s", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, leo ultricies imperdiet elementum, diam justo euismod odio, in ultrices urna quam non libero. Duis et erat congue, semper arcu sit amet, dapibus eros. Vivamus convallis ipsum est, eu pellentesque ante congue sed. " },
// ]


const Watch = () => {

    const soteriaYoutubeLink = 'https://www.youtube.com/@soteriachurchmarylandusa7385/streams';

    return (
        <div className="watch-page">
            <div className='container-fluid'>
                <div className="row align-items-start gx-3">
                    <div className="col-xl-7 p-3">
                        <ReactPlayer url={sermon.youtubeLink} width={"100%"} height={"100%"} className="youtube-video" controls={true} youtube/>
                    </div>
                    <div className="col-xl-5 p-3">
                        <div className="details">
                            <h4 className='item title'>
                                {sermon.title}
                            </h4>
                            <div className='item preacher'> <PersonOutlineIcon /> <span> {sermon.preacher} </span></div>
                            <div className='item date'> <TodayIcon /><span> {sermon.date} </span></div>
                            <p className='item'>
                                {sermon.desc}
                            </p>
                        </div>
                        <Link className="btn-gold-solid mt-3" to={soteriaYoutubeLink}>
                            Watch More Sermons
                        </Link>
                    </div>

                </div>


            </div>
        </div>

    )
}

export default Watch