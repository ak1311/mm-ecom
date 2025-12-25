import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-main-container">
        <div className="profile-spacer"></div>
        
        {/* Column 1: Span 2, divided into 2 rows */}
        <div className="profile-col-first">
          <div className="col-first-row-square"></div>
          <div className="col-first-row-rest"></div>
        </div>

        {/* Column 2: Span 5 */}
        <div className="profile-col-second"></div>

        {/* Column 3: Span 2 */}
        <div className="profile-col-third"></div>

        <div className="profile-spacer"></div>
      </div>
    </div>
  );
};

export default Profile;