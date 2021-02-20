import React from 'react';
import PropTypes from 'prop-types';
import './cardMedia.scss';
import Slider from '../Hotel/Slider';

function CardMedia({hotel}) {
  return (
    <div className="card-media">
      <Slider hotel={hotel}/>
      <span role="img" className="card-media__star" aria-label="star">★ {hotel.stars}</span>
      
    </div>
  );
}

CardMedia.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    stars: PropTypes.number.isRequired
  }).isRequired
};

export default CardMedia;