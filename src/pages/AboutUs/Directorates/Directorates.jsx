import React, { useState } from 'react'
import "./Directorates.css"
import OptimizedImage from '../../../components/OptimizedImage/OptimizedImage'

const Directorates = () => {
  const [filter, setFilter] = useState(null)
  

  return (
    <div className="directorates-page">
      <div className="container-fluid">
        <div className="row special">
          <div className="col-md-6 text-col">
            <span>Directorate of</span>
            <h4 className='title'></h4>
            <p>Soteria Church is led by Drs Chuka and Ndidi Anude, dedicated pastors with a heart for God and a passion for seeing lives transformed by His grace. Under their leadership, our church continues to grow and impact our community with the love of Christ.</p>
          </div>
          <div className=" col-md-6 image-col">
            <OptimizedImage src="/assets/pastor-chuka-and-ndidi.jpg" className="image" />

          </div>

        </div>
      </div>
    </div>
  )
}

export default Directorates