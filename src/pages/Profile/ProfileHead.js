import React from 'react'

import Preloader from '../../components/common/Preloader/Preloader'
import userPNG from '../../assets/user.png'

const ProfileHead = props => {
  return (
    <>
      {!props.profile ? (
        <Preloader />
      ) : (
        <>
          <h3 className="title">Profile</h3>
          <div className="profile-head">
            <div className="row">
              <div className="profile-img z-depth-2 col s12">
                <img
                  style={{maxWidth: 300}}
                  src={
                    props.profile.photos.large != null
                      ? props.profile.photos.large
                      : userPNG
                  }
                  alt="Profile"
                />
              </div>
              <div className="profile-info col s12">
                <div className="card blue-grey white">
                  <div className="card-content">
                    <span className="card-title">{props.profile.fullName}</span>
                    <blockquote>{props.profile.aboutMe}</blockquote>
                    {props.profile.aboutMe ? (
                      <p>Searching for a job</p>
                    ) : (
                      <p>Not looking for work</p>
                    )}
                  </div>
                  <div className="card-action ">
                    <a href="#!" className="blue-text profile-btn">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ProfileHead
