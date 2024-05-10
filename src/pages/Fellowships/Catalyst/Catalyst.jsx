import React from 'react'
import OptimizedImage from '../../../components/OptimizedImage/OptimizedImage'
import { Link } from 'react-router-dom'
import "../FellowshipPage.css"

const Catalyst = () => {
    return (
        <div className="fellowship-page catalyst">
            <div className="container-fluid">
                <OptimizedImage src="/assets/catalyst-2-medium.jpg" className="image" />
                <div className="text-col">
                    <span>Youth Fellowship</span>
                    <h4 className='title'>Catalyst</h4>
                    <div className="description">
                        <p>Catalyst is the Youth Ministry of Soteria Church. Our group has a wide range of vibrant Jesus-lovers all the way from High School to early/mid-career individuals. Our mission is to truly be catalysts for Christ. To be people who will enforce the Kingdom of God in all our spheres, while remaining steadfast and grounded in the Word of God, despite our ever-changing world. </p>
                    </div>
                </div>

                <OptimizedImage src="/assets/catalyst-1-medium.jpg" className="image" />


            </div>
        </div>
    )
}

export default Catalyst