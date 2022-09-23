import React from 'react';

const AppLoader = () => {
  return (
    <div className="app-loader">
      <div className="loader-spin">
        <span className="sift-dot sift-dot-spin">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </div>
  );
};

export default AppLoader;
