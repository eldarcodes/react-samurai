import React from 'react'

import ProfileHead from './ProfileHead'
import PostsContainer from './PostsContainer'

import './Profile.scss'

const Profile = props => {
  return (
    <>
      <ProfileHead profile={props.profile} />
      <PostsContainer />
    </>
  )
}

export default Profile
