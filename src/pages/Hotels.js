import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import {setHotels} from '../redux/actions';

function Hotels({dispatch}) {

  dispatch(setHotels());

  return (
    
      <div className="hotels">
        <Navbar />
        <h1 className="mb-4">Хотели</h1>
      </div>
      
   
  );
}

export default connect()(Hotels);