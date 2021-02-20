import React from "react";
import { connect } from "react-redux";
import { setHotels } from "../redux/actions";

function Hotels({ dispatch }) {
  dispatch(setHotels());

  return (
    <div className="hotels">
      <h1 className="mb-4">Хотели</h1>
    </div>
  );
}

export default connect()(Hotels);
