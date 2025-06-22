import React, { useEffect, useState } from 'react';
import "./EventDetails.css";
import { useParams, Link, useSearchParams } from 'react-router-dom';
import Today from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Share } from '@mui/icons-material';
import OptimizedImage from '../../../components/OptimizedImage/OptimizedImage';
import { formatDate, formatTime } from '../../../utils/time';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { fetchEventDetails } from '../../../api/strapi';
import { CircularProgress } from '@mui/material';

const EventDetails = () => {
  // const { id } = useSearchParams();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleShare = () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: 'Check out this event!',
          text: 'Soteria Church MD is inviting you',
          url: shareUrl,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Share failed:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  useEffect(() => {
    const fetchEventsData = async () => {
      setLoading(true);
      const { response, error } = await fetchEventDetails(id);

      if (error) {
        console.error(error);
        setError("Failed to load event details. Please try again later.");
      } else {
        const eventsData = response.data.attributes;
        setEvent(eventsData);
      }

      setLoading(false);
    };

    fetchEventsData();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center p-5">
        <div className="loader"><CircularProgress /></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex align-items-center justify-content-center p-5">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div className="event-details-page">
      <div className='container-fluid'>
        <div className="row align-items-start gx-3">
          <div className="col-xl-6 p-3">
            <OptimizedImage
              src={`${import.meta.env.VITE_BASE_URL}${event?.image?.data?.attributes?.formats?.medium?.url || event?.image?.data?.attributes?.url}`}
              className='img'
            />
          </div>
          <div className="col-xl-6 p-3">
            <div className="details">
              <div className='d-flex mb-2 align-items-center gap-2'>
                <h2 className='item title m-0'>{event?.title}</h2>
                <Share onClick={handleShare} role="button" />
              </div>

              {event?.startDate && (
                <div className='item item-with-icon date'>
                  <Today className='icon' />
                  <span>
                    {`${formatDate(event?.startDate)}  ${event?.endDate ? `- ${formatDate(event?.endDate)}` : ''}`}
                  </span>
                </div>
              )}

              {event?.time && (
                <div className='item item-with-icon time'>
                  <AccessTimeIcon className='icon' />
                  <span style={{ textTransform: 'uppercase' }}>{formatTime(event?.time)}</span>
                </div>
              )}

              <div className='item mt-2 overview'>
                <span className='fw-bold mb-2'>Overview: </span>
                {event?.desc && <BlocksRenderer content={event?.desc} />}
                {/* {event?.description && event?.description} */}
              </div>

              {event?.registerationLink && (
                <Link className="registeration-btn btn-green-solid mt-4" to={event?.registerationLink}>
                  Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
