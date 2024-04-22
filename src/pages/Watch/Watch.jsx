import React from 'react';
import SermonCard from '../../components/SermonCard/SermonCard';
import "./Watch.css"

const sermons = [
    { title: 'Trusting the word of God', preacher: 'Pst. John Doeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', date: '12-09-2024', id: 1, youtubeLink: "https://www.youtube.com/watch?v=dew9OyZTRAs", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, leo ultricies imperdiet elementum, diam justo euismod odio, in ultrices urna quam non libero. Duis et erat congue, semper arcu sit amet, dapibus eros. Vivamus convallis ipsum est, eu pellentesque ante congue sed. " },
    { title: 'Faith Work', preacher: 'Pst. Jane Doe', date: '12-09-2024', id: 2, youtubeLink: "https://www.youtube.com/watch?v=Y8IdYJQ0QYc", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, leo ultricies imperdiet elementum, diam justo euismod odio, in ultrices urna quam non libero. Duis et erat congue, semper arcu sit amet, dapibus eros. Vivamus convallis ipsum est, eu pellentesque ante congue sed. " },
    { title: 'Divine inspiration service', preacher: 'Pst. Stranger Danger', date: '12-09-2024', id: 3, youtubeLink: "https://www.youtube.com/watch?v=q7zWxLABE1U&t=1s", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, leo ultricies imperdiet elementum, diam justo euismod odio, in ultrices urna quam non libero. Duis et erat congue, semper arcu sit amet, dapibus eros. Vivamus convallis ipsum est, eu pellentesque ante congue sed. " },
]


const Watch = () => {
    return (
        <div className="watch-page">
            <div className='container-fluid'>
                {sermons.map((sermon, index)=><SermonCard key={index} sermon={sermon}/>)}
            </div>
        </div>

    )
}

export default Watch