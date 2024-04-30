import React from 'react'
import { Link } from "react-router-dom"
import './MobileApp.css'
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage'

const MobileApp = () => {
    return (
        <div className="mobile-app-page">
            <div className="container">
                <div className="row">
                    <div className=" col-md-5 image-col">
                        <OptimizedImage src="assets/soteria-mobile-app-portrait.png" className="image" />
                    </div>
                    <div className=" col-md-7 text-col">
                        <span>Feel Free To Try Out</span>
                        <h4 className='title'>Our Mobile App</h4>
                        <p>Stay connected with Soteria Church wherever you go with our mobile app. Access sermons, event updates, prayer requests, and more right from your smartphone. With user-friendly features and instant notifications, our app keeps you engaged and informed, ensuring you never miss out on what's happening in our church community. Download now and experience the convenience of having Soteria Church at your fingertips.</p>
                        <div className="store-links">
                            <Link to=""><img src='/assets/app-store.png'/></Link>
                            <Link to=""><img src='/assets/playstore.png'/></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileApp