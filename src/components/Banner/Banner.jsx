import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import HomeIcon from '@mui/icons-material/Home';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import KeyboardArrowRightOutlined from '@mui/icons-material/KeyboardArrowRightOutlined';

const Banner = ({ pathname }) => {
    const segments = pathname.split('/').filter(segment => segment !== '');
    // Split pathname and remove empty segments

    const formatSegment = (segment) => {
        return segment
            .split('-') // Split by hyphen
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
            .join(' '); // Join words with a space
    };

    return (
        <div className='banner'>
            <div className="banner-heading">
                <h1>{formatSegment(segments[segments.length - 1])}</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item home"><Link to="/"><HomeIcon fontSize='small' /> </Link></li>
                        {segments.map((segment, index) => (<>
                            <KeyboardArrowRightOutlined fontSize='small' className="breadcrumb-separator" />


                            {index >= segments.length - 2 ? (
                                <li className="breadcrumb-item last" key={index}>
                                    <span>{formatSegment(segment)}</span> 
                                </li>
                            ) : (
                                <li className="breadcrumb-item last" key={index}>

                                    <Link to={`/${segments.slice(0, index + 1).join('/')}`}>
                                        {formatSegment(segment)}
                                    </Link>
                                </li>
                            )}
                        </>

                        ))}
                    </ol>
                </nav>
            </div>
            <OptimizedImage src="/assets/preaching.jpg" className="background-img" alt="background-img" />
        </div>
    );
};

export default Banner;
