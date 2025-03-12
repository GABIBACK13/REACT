import PropTypes from "prop-types";
import React from "react";

export default function Loading({ isLoading }) {
  if (!isLoading) return null;
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
