import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Dashboard = (props) => {
  return (
    <div>
      Dashboard
      {/* <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user m-1"></i>Welcome Víctor Sada
        </p>
        <div className="dash-buttons">
          <a href="create-profile.html" className="btn">
            <i className="fas fa-user-circle text-primary"></i> Edit Profile
          </a>
          <a href="add-experience.html" className="btn">
            <i className="fab fa-black-tie text-primary"></i> Add Experience
          </a>
          <a href="add-education.html" className="btn">
            <i className="fas fa-graduation-cap text-primary"></i> Add Education
          </a>
        </div>

        <h2 className="my-2">Experience Credentials</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th className="hide-sm">Title</th>
              <th className="hide-sm">Years</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Freelance Developer</td>
              <td className="hide-sm">Web Developer</td>
              <td className="hide-sm">Octuber 2019 - Current</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Darsena 17</td>
              <td className="hide-sm">System Admin</td>
              <td className="hide-sm">January 2018 - Current</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="my-2">Education Credentials</h2>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th className="hide-sm">Degree</th>
              <th className="hide-sm">Years</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td className="hide-sm"></td>
              <td className="hide-sm"></td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="my-2">
          <button className="btn btn-danger">
            <i className="fas fa-user-minus"></i> Delete My Account
          </button>
        </div>
      </section> */}
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
