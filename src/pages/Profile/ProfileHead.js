import React from 'react'

const ProfileHead = () => {
  return (
    <>
      <h3 className="title">Profile</h3>
      <div className="img_wrapper">
        <img
          alt="profile"
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
        />
      </div>
      <div>ava + description</div>
    </>
  )
}

export default ProfileHead
