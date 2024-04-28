import React from 'react'
import "./AboutUs.css"
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage'
import { Diversity3, EmojiObjects, MenuBook, MusicNote, Security, VolunteerActivism, Whatshot } from '@mui/icons-material'

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

        {/* Values */}
        <div className="row special cards-row values">
          <div className="header">
            <span>Our Values</span>
            <h4 className='title'>The 7 W’s of Soteria Church </h4>
            {/* <p>At Soteria Church, our vision is clear: To be and to make devoted disciples of Jesus Christ and Transformational Servant-Leaders.</p> */}
          </div>
          <div className="list">
            <div className="value-card">
              <MenuBook className='icon' fontSize='large' />
              <div className="card-content">
                <h5 className='title'>Word</h5>
                <p>We are committed to the authority and truth of God's Word, the Bible, as our guide for faith and life.</p>
              </div>
            </div>
            <div className="value-card">
              <MusicNote className='icon' fontSize='large' />
              <div className="card-content">
                <h5 className='title'>Worship</h5>
                <p>We prioritize heartfelt worship as an expression of our love and devotion to God.</p>
              </div>
            </div><div className="value-card">
              <Security className='icon' fontSize='large' />
              <div className="card-content">
                <h5 className='title'>Warfare</h5>
                <p>We engage in spiritual warfare through prayer and intercession, trusting in God's power to overcome every obstacle.</p>
              </div>
            </div><div className="value-card">
              <Diversity3 className='icon' fontSize='large' />
              <div className="card-content">
                <h5 className='title'>Witnessing</h5>
                <p>We are passionate about sharing the love and message of Jesus with others, both locally and globally.</p>
              </div>
            </div><div className="value-card">
              <Whatshot className='icon' fontSize='large' />
              <div className="card-content">
                <h5 className='title'>Works of the holy spirit</h5>
                <p>We depend on the Holy Spirit to empower and equip us for ministry and service.</p>
              </div>
            </div><div className="value-card">
              <VolunteerActivism className='icon' fontSize='large' />
              <div className="card-content">
                <h5 className='title'>Works of service</h5>
                <p>We demonstrate our love for God and others through acts of compassion, generosity, and service.</p>
              </div>
            </div><div className="value-card">
              <EmojiObjects className='icon' fontSize='large' />
              <div className="card-content">
                <h5 className='title'>Wisdom</h5>
                <p>We seek God's wisdom in all decisions and endeavors, trusting in His guidance and direction.</p>
              </div>
            </div>

          </div>
        </div>
        <div className="row special leadership">
          <div className="col-md-6 text-col">
            <span>Leadership</span>
            <h4 className='title'>Our Lead Pastors </h4>
            <p>Soteria Church is led by Drs Chuka and Ndidi Anude, dedicated pastors with a heart for God and a passion for seeing lives transformed by His grace. Under their leadership, our church continues to grow and impact our community with the love of Christ.</p>
          </div>
          <div className=" col-md-6 image-col">
            <OptimizedImage src="assets/pastor-chuka-and-ndidi.jpg" className="image" />
          </div>

        </div>

        {/* Directorates */}
        <div className="row special cards-row directorates">
          <div className="header">
            <span>Soteria Directorates</span>
            <h4 className='title'>The Council of Servant Leaders (COSEL) </h4>
          </div>
          <div className="list">
            <div className="directorate-card">
              <MenuBook className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>Prayer</h6>
                <p>Join us in fervent prayer</p>
              </div>
            </div>
            <div className="directorate-card">
              <MusicNote className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>Community</h6>
                <p>Evangelism and Community Engagement</p>
              </div>
            </div>
            <div className="directorate-card">
              <Security className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>First Impression</h6>
                <p>Creating welcoming environments</p>
              </div>
            </div>
            <div className="directorate-card">
              <Diversity3 className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>Retention and Membership</h6>
                <p>Transforming visitors into members</p>
              </div>
            </div>
            <div className="directorate-card">
              <Whatshot className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>Worship and Creative Arts</h6>
                <p>Expressive worship experiences</p>
              </div>
            </div>
            <div className="directorate-card">
              <VolunteerActivism className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>Media</h6>
                <p>Enhancing visual and auditory experiences</p>
              </div>
            </div>
            <div className="directorate-card">
              <EmojiObjects className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>Finance (Chayil)</h6>
                <p>Stewarding God's resources wisely</p>
              </div>
            </div>
            
            <div className="directorate-card">
              <EmojiObjects className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>Operations</h6>
                <p>Efficient management of operations</p>
              </div>
            </div>
            <div className="directorate-card">
              <EmojiObjects className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>Missions</h6>
                <p>Missions, Church Planting, and International Relations</p>
              </div>
            </div>
            <div className="directorate-card">
              <EmojiObjects className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>So-KK</h6>
                <p>(Soteria King’s Kids)</p>
              </div>
            </div>
            <div className="directorate-card">
              <EmojiObjects className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>Catalyst</h6>
                <p>Empowering youth for Christ</p>
              </div>
            </div>
            <div className="directorate-card">
              <EmojiObjects className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>F.L.A.M.E</h6>
                <p> Family Life and Marriage Enrichment</p>
              </div>
            </div>
            <div className="directorate-card">
              <EmojiObjects className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>F.L.A.M.E</h6>
                <p> Family Life and Marriage Enrichment</p>
              </div>
            </div>
            <div className="directorate-card">
              <EmojiObjects className='icon' fontSize='large' />
              <div className="card-content">
                <h6 className='title'>SoCARE</h6>
                <p>SOTERIA CARE GROUP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs