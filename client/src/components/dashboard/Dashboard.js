import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user m-1"></i>Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <div className="dash-buttons">
            <Link to="/edit-profile" className="btn ">
              <i className="fas fa-user-circle text-primary"></i> Edit Profile
            </Link>
            <Link to="/add-experience" className="btn">
              <i className="fab fa-black-tie text-primary"></i> Add Experience
            </Link>
            <Link to="/add-education" className="btn">
              <i className="fas fa-graduation-cap text-primary"></i> Add
              Education
            </Link>
          </div>{' '}
        </Fragment>
      ) : (
        <Fragment>
          <p className="p-1">
            You have not yet set up a profile, please add some info
          </p>
          <div className="dash-buttons">
            <Link to="/create-profile" className="btn ">
              <i className="fas fa-user-circle text-primary"></i> Create Profile
            </Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
