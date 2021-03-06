import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle"></i> 404 Page Not Found
      </h1>
      <br />
      <p className="large"> Sorry, this page does not exist </p>
    </Fragment>
  );
};

export default NotFound;
