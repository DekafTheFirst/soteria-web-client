import React from 'react'
import OptimizedImage from '../../../components/OptimizedImage/OptimizedImage'
import { Link } from 'react-router-dom'
import "../FellowshipPage.css"

const DanielsMen = () => {
    return (
        <div className="fellowship-page daniels-men">
            <div className="container-fluid">
                <OptimizedImage src="/assets/men.jpg" className="image" />
                <div className="text-col">
                    <span>Men's Fellowship</span>
                    <h4 className='title'>Daniel's Men</h4>
                    <div className="description">
                        <p className='fst-italic'>“Then the other administrators and high officers began searching for some fault in the way Daniel was handling government affairs, but they couldn’t find anything to criticize or condemn. He was faithful, always responsible, and completely trustworthy” Daniel 6:4 (NLT)</p>
                        <p>The Daniel’s Men is the Men’s Brotherhood and Fellowship of Soteria Church. While there are many who are male in our world, we understand that our nations. our communities, and our families are plagued with a scarcity of “Men”. The Daniel’s Men Fellowship strives to create an interactive forum for men to come together, interact, disciple each other, and grow together as men, prepared to confront the lies of what the world assumes manhood to be and focused on scriptural foundations of who a man truly is. We encourage each other to form relationships and bonds that challenge and equip us to become the brothers, sons, husbands, and fathers who like Daniel are faithful, always responsible, and completely trustworthy in all that God has put in our hands. </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DanielsMen