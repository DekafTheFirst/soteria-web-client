import React from 'react'

import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-7">
                        <div className="row links">
                            <div className="link-category col-6 col-lg-4">
                                <h5>Company</h5>
                                <Link to="/company">About Us</Link>
                                <Link to="/company">Mission</Link>
                                <Link to="/company">Contact Us</Link>
                            </div>
                            <div className="link-category col-6 col-lg-4">
                                <h5>Services</h5>
                                <Link to="/services/legal-advisory-and-policy-development">Legal Advisory</Link>
                                <Link to="/services/financial-consulting-and-investment-advisory">Financial Consulting</Link>
                                <Link to="/services/environmental-management-and-sustainability-solutions">Environmental Management</Link>
                                <Link to="/services/public-private-partnerships">Public Private Partnerships</Link>
                                <Link to="/services/project-management">Project Management</Link>
                            </div>
                            <div className="link-category col-6 col-lg-4">
                                <h5>Contact</h5>
                                <Link to="/">Home</Link>
                                <Link to="/company">Contact</Link>
                            </div>
                            <div className="link-category col-6 col-lg-4 logo-col">
                                {/* <img src={require("../imgs/logo.png")} alt="logo-underlay" className="logo" /> */}

                            </div>
                        </div>
                    </div>
                    <div className="footer-content col-md-6 col-lg-5">

                        <form action="">
                            <h5>Newsletter: </h5>
                            <div className="form-container">
                                <input type="email" name="" id="" placeholder="Your email here" />
                                <button type="submit" className="page-btn">Subscribe</button>
                            </div>

                        </form>

                        <div className="media-links">
                            <div className="links">
                                <Link to="#">
                                    {/* <img className="media-icon" src={require("../icons/facebook.png")} alt="" /> */}
                                </Link>
                                <Link to="#">
                                    {/* <img className="media-icon" src={require("../icons/twitter.png")} alt="" /> */}
                                </Link>
                                <Link to="#">
                                    {/* <img className="media-icon" src={require("../icons/instagram.png")} alt="" /> */}
                                </Link>
                                <Link to="#">
                                    {/* <img className="media-icon" src={require("../icons/linkedin.png")} alt="" /> */}
                                </Link>
                            </div>

                        </div>


                        <div className="company-info">
                            <div><span>Mobile:</span> <Link to="tel:+2348039490323">+2348039490323</Link></div>
                            <div><span>Email:</span> <Link to="mailto:info@quantumexcapital.com">info@quantumexcapital.com</Link></div>
                            <div><span>Address:</span> <p>Address: Suite 9, Edo House,  5th Floor, Ralph Shodeinde Street,  Central Business District, Abuja</p></div>

                        </div>
                    </div>

                    <div className="copy-right mt-3">
                        <p>QuantumEx Capital Solutions &copy; 2024, All RIghts Reserved.</p>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer