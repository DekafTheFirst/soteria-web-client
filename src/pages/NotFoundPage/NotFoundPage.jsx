import React from 'react'
import "./NotFoundPage.css"
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage'
import Navbar from '../../components/Navbar/Navbar'

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
        <div className="container-fluid">
            <OptimizedImage src="/assets/not-found.svg" className="image" />
        </div>
    </div>
  )
}

export default NotFoundPage