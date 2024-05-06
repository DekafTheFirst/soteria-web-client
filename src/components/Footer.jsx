import React from 'react'

import { Link } from 'react-router-dom';
import { LocationCityOutlined, PhoneOutlined, EmailOutlined, MyLocation, FacebookOutlined, Instagram, YouTube, Facebook, FacebookRounded, WhatsApp } from '@mui/icons-material'
import OptimizedImage from './OptimizedImage/OptimizedImage';

const Footer = () => {
    return (
        <footer >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="info-col  col-lg-5">
                        <OptimizedImage src="/assets/soteria-logo.png" className='img' />
                        <p className='info-heading'>To be and to make devoted disciples of Jesus Christ and Transformational Servant-Leaders.</p>
                        <div className="media-links">
                            <div className="links">

                                <Link to="#">
                                    <FacebookOutlined />
                                </Link>
                                <Link to="#">
                                    <Instagram />
                                </Link>
                                <Link to="#">
                                    <YouTube />
                                </Link>
                                <Link to="#">
                                    <WhatsApp />
                                </Link>
                            </div>
                        </div>


                        <div className="company-info">
                            <div className='item'><PhoneOutlined fontSize='small' className='icon' /> <Link to="tel:+2348039490323">+ 180 394 9032</Link></div>
                            <div className='item'><EmailOutlined fontSize='small' className='icon' /><Link to="mailto:info@soteriachurch.org">info@soteriachurch.org</Link></div>
                            <div className='item'><MyLocation fontSize='small' className='icon' /><Link to="https://maps.app.goo.gl/VWzpguSG6oZGoiXb8"> 1928 Woodlawn Dr, Woodlawn, MD 21207, USA</Link></div>
                        </div>
                    </div>
                    
                    <div className=" col-lg-7">
                        <div className="row links">
                            <div className="link-category col-6 col-lg-4">
                                <span className="category-heading">About Us</span>
                                <Link to="/about-us">Church Vision</Link>
                                <Link to="/about-us">Core Values</Link>
                                <Link to="/about-us">Pastoral Leadership</Link>
                                <Link to="/about-us">Our Community</Link>
                                <Link to="/about-us">Contact Us</Link>

                            </div>
                            <div className="link-category col-6 col-lg-4">
                                <span className="category-heading">Ministries</span>
                                <Link to="/connect/kiddies">Soteria King’s Kids</Link>
                                <Link to="">Catalyst</Link>
                                <Link to="/connect/daniels-men">Daniel's Men</Link>
                                <Link to="/connect/poiema">Women Fellowship(Poiema)</Link>
                            </div>
                            <div className="link-category col-6 col-lg-4">
                                <span className="category-heading">Community Engagement</span>
                                <Link to="/community-engagement/outreaches">Outreaches</Link>
                                <Link to="/events">Events Calendar</Link>
                                <Link to="/community-engagement">Volunteer Opportunities</Link>
                                <Link to="">Photo Gallery</Link>
                            </div>
                            <div className="link-category col-6 col-lg-4">
                                <span className="category-heading">Support & Resources</span>
                                <Link to="https://www.paypal.com/us/home">Give</Link>
                                <Link to="/connect/prayer-requests">Prayer Requests</Link>
                                <Link to="/join-us">Join Us</Link>
                                <Link to="">SOCITH</Link>
                                <Link to="/connect/sodip">SODIP</Link>
                            </div>
                            <div className="link-category col-6 col-lg-4">
                                <span className="category-heading">Connect</span>
                                <Link to="/events">Upcoming Events</Link>
                                <Link to="">Latest Sermon</Link>
                                <Link to="/connect/prayer-requests">Prayer Requests</Link>
                                <Link to="/join-us">Join Us</Link>
                                <Link to="/connect/contact-us">Contact Us</Link>
                            </div>
                            
                        </div>
                    </div>




                </div>

            </div>
            <div className="copy-right mt-3">
                <p>Soteria Church &copy; 2024, All RIghts Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer