import React from 'react'
import OptimizedImage from '../OptimizedImage/OptimizedImage'
import "./MediaCard.css"
const MediaCard = () => {
    return (
        <div className="media-card">
            <OptimizedImage src="/assets/abstract-1.jpg" className='img' blurhash="LWH.4sD+$%kX~poeNFx]?Ht7WBxu" />
            <h4 className='title'>
                Nulla vitae eros odio. Vivamus a
                commodo lorem. In in elit nec
            </h4>
            <span className='date'>12th May, 2024</span>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus itaque quia aspernatur excepturi nobis non, impedit voluptatem consequatur ducimus qui ullam? Voluptatibus.
            </p>
        </div>
    )
}

export default MediaCard