import React from 'react'
import {Link} from "react-router-dom"
import './PlanYourVisit.css'
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage'

const PlanYourVisit = () => {
    return (
        <div className="plan-your-visit-page">
            <div className="container">
                <div className="row">
                    <div className=" col-md-5 image-col">
                        <OptimizedImage src="assets/map-mockup.png" className="image" />
                    </div>
                    <div className=" col-md-7 text-col">
                        <span>Get directions</span>
                        <h4 className='title'>You are invited to the Soteria Church</h4>
                        <p>Finding your way to Soteria Church is simple. Located at the heart of Baltimore County, Maryland, our church is easily accessible from major roads and highways. Whether you're coming from downtown Baltimore or surrounding areas, we're conveniently situated to welcome you.</p>
                        <Link to="https://maps.app.goo.gl/QH9b52dyw3gcq1He9" className='btn-gold-solid mt-3'>Get Directions</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanYourVisit