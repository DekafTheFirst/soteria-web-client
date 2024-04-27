import React from 'react'
import "./AboutUs.css"
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage'
import MenuBookIcon from '@mui/icons-material/MenuBook';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="container">
        <div className="row">
          <div className=" col-md-6 image-col">
            <OptimizedImage src="assets/abstract-1.jpg" className="image" />
          </div>
          <div className=" col-md-6 text-col">
            <span>Get to know us</span>
            <h4 className='title'>About Soteria Church</h4>
            <p>Welcome to Soteria Church, a vibrant and diverse community dedicated to knowing, loving, and serving Jesus Christ. We are a multiracial, multi-ethnic, multicultural, and multigenerational family of believers united by our faith in Christ and our passion for making His love known in the world.</p>
          </div>
        </div>
        <div className="row">
          <div className=" col-md-6 image-col">
            <OptimizedImage src="assets/abstract-2.jpg" className="image" />
          </div>
          <div className=" col-md-6 text-col">
            <span>Our Vision</span>
            <h4 className='title'>Soteria Church Vision</h4>
            <p>At Soteria Church, our vision is clear: To be and to make devoted disciples of Jesus Christ and Transformational Servant-Leaders.</p>
          </div>
        </div>
        <div className="row special values">
          <div className="header">
            <span>Our Values</span>
            <h4 className='title'>The 7 W’s of Soteria Church </h4>
            {/* <p>At Soteria Church, our vision is clear: To be and to make devoted disciples of Jesus Christ and Transformational Servant-Leaders.</p> */}
          </div>
          <div className="list">
            <div className="value-card">
              <MenuBookIcon className='icon' fontSize='large'/>
              <div className="card-content">
                <h5 className='title'>Word</h5>
                <p>We are committed to the authority and truth of God's Word, the Bible, as our guide for faith and life.</p>
              </div>
            </div>
            <div className="value-card">
              <MenuBookIcon className='icon' fontSize='large'/>
              <div className="card-content">
                <h5 className='title'>Word</h5>
                <p>We are committed to the authority and truth of God's Word, the Bible, as our guide for faith and life.</p>
              </div>
            </div><div className="value-card">
              <MenuBookIcon className='icon' fontSize='large'/>
              <div className="card-content">
                <h5 className='title'>Word</h5>
                <p>We are committed to the authority and truth of God's Word, the Bible, as our guide for faith and life.</p>
              </div>
            </div><div className="value-card">
              <MenuBookIcon className='icon' fontSize='large'/>
              <div className="card-content">
                <h5 className='title'>Word</h5>
                <p>We are committed to the authority and truth of God's Word, the Bible, as our guide for faith and life.</p>
              </div>
            </div><div className="value-card">
              <MenuBookIcon className='icon' fontSize='large'/>
              <div className="card-content">
                <h5 className='title'>Word</h5>
                <p>We are committed to the authority and truth of God's Word, the Bible, as our guide for faith and life.</p>
              </div>
            </div><div className="value-card">
              <MenuBookIcon className='icon' fontSize='large'/>
              <div className="card-content">
                <h5 className='title'>Word</h5>
                <p>We are committed to the authority and truth of God's Word, the Bible, as our guide for faith and life.</p>
              </div>
            </div><div className="value-card">
              <MenuBookIcon className='icon' fontSize='large'/>
              <div className="card-content">
                <h5 className='title'>Word</h5>
                <p>We are committed to the authority and truth of God's Word, the Bible, as our guide for faith and life.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs