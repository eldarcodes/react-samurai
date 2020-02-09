import React from 'react'
import '../Pages.scss'
import ProfileHead from './ProfileHead'
import PostsContainer from './PostsContainer'

const Profile = props => {
  return (
    <>
      <ProfileHead />
      <PostsContainer />
    </>
  )
}

export default Profile
