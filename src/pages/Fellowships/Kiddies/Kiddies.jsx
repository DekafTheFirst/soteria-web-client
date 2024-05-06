import React from 'react'
import OptimizedImage from '../../../components/OptimizedImage/OptimizedImage'
import { Link } from 'react-router-dom'
import "../FellowshipPage.css"
import "./Kiddies.css"

const Kiddies = () => {
    return (
        <div className="fellowship-page kiddies">
            <div className="container-fluid">
                <OptimizedImage src="/assets/soteria-kiddies.jpg" className="image" />
                <div className="text-col">
                    <span>So-KK </span>
                    <h4 className='title'>Soteria King’s Kids</h4>
                    <div className="description">
                        <p>We recognize that God works on and in the hearts of little ones. Thus, we seize every opportunity knowing that we can evangelize and disciple our children for Christ and nurture them towards spiritual growth and maturity while they develop a strong moral character from a young age. We believe that our children's church is sacred because it is a place where attitudes and heart values are being birthed and molded. Our desire is to always create the opportunity and the right atmosphere for that to happen.</p>
                        <p>Divided into 3 groups; KINDLE (under 5 years), IGNITE (5-9 years) and BLAZE (10-14 years), we train their HEARTS, HEADS, and HANDS so they can be all that God has made them to be</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Kiddies