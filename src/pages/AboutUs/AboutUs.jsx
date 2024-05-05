import React from 'react'
import "./AboutUs.css"
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage'
import { useNavigate } from 'react-router-dom';
import { directoratesData } from './Directorates/Directorates';
import { Diversity3, EmojiObjects, MenuBook, MusicNote, Security, VolunteerActivism, Whatshot } from '@mui/icons-material'
import ConnectCard from '../../components/ConnectCard/ConnectCard';


const AboutUs = () => {
  const navigate = useNavigate()
  const itemToPass = {
    name: "dekaf"
  }

  const connectItems = [
    { title: "Men's Fellowship(Daniel's Men)", route: '/connect/mens-fellowship', desc: 'The Daniel’s Men is the Men’s Brotherhood and Fellowship of Soteria Church.', imgUrl: '/assets/men.jpg' },
    { title: "Women's Fellowship(POIEMA)", route: '/connect/womens-fellowship', desc: 'Poiema (Poy- ah- mah) is the Women’s Ministry of Soteria Church. ', imgUrl: '/assets/poima.jpg' },
    { title: "Soteria kiddies", route: '/connect/kiddies', desc: 'Kiddies time with God.', imgUrl: '/assets/soteria-kiddies.jpg' },
  ]

  return (
    <div className="about-us-page">
      <div className="container">
        <div className="row">
          <div className=" col-md-6 image-col">
            <OptimizedImage src="assets/abstract-1-medium.jpg" className="image" />
          </div>
          <div className=" col-md-6 text-col">
            <span>Get to know us</span>
            <h4 className='title'>About Soteria Church</h4>
            <p>Welcome to Soteria Church, a vibrant and diverse community dedicated to knowing, loving, and serving Jesus Christ. We are a multiracial, multi-ethnic, multicultural, and multigenerational family of believers united by our faith in Christ and our passion for making His love known in the world.</p>
          </div>
        </div>
        <div className="row">
          <div className=" col-md-6 image-col">
            <OptimizedImage src="assets/abstract-2-medium.jpg" className="image" />
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

        {/* Leadership */}
        <div className="row special leadership">
          <div className="col-md-6 text-col">
            <span>Leadership</span>
            <h4 className='title'>Our Lead Pastors </h4>
            <p>Soteria Church is led by Drs Chuka and Ndidi Anude, dedicated pastors with a heart for God and a passion for seeing lives transformed by His grace. Under their leadership, our church continues to grow and impact our community with the love of Christ.</p>
          </div>
          <div className=" col-md-6 image-col">
            <OptimizedImage src="/assets/pastor-chuka-and-ndidi-medium.jpg" className="image" />

          </div>

        </div>

        {/* Directorates */}
        <div className="row special cards-row directorates" id="directorates">
          <div className="header">
            <span>Soteria Directorates</span>
            <h4 className='title'>The Council of Servant Leaders (COSEL) </h4>
          </div>
          <div className="list">
            {directoratesData.map((item, index) => {
              return (
                <div className={`directorate-card`} key={index} onClick={() => navigate('/about-us/directorates', { state: { slug: item.slug } })}>
                  {item.icon}
                  <div className="card-content">
                    <h6 className='title'>{item.title}</h6>
                    <div className="go-corner" href="#">
                      <div className="go-arrow">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <section className="row special cards-row connect ">
          <div className="header">
            <span>Our Fellowships</span>
            <h4 className='title'>Get acquinted with soteria </h4>
          </div>
          {connectItems ? <div className="cards">
            {connectItems.map((item, index) => (
              <ConnectCard item={item} key={index} />
            ))}
          </div>
            :
            <div className='loader-wrapper'>
              <CircularProgress color='success' />
            </div>
          }
        </section>
      </div>
    </div>
  )
}

export default AboutUs