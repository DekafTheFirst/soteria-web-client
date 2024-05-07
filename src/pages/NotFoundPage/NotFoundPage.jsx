import React from 'react'
import "./NotFoundPage.css"
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div className="not-found-page">
        <div className="container-fluid">
            <OptimizedImage src="/assets/not-found.svg" className="image" />
            <btn className="btn-green-outline" onClick={()=>navigate(-1)}> Go back</btn>
        </div>
    </div>
  )
}

export default NotFoundPage