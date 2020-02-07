import React from 'react'
import '../Pages.scss'
import ProfileHead from './ProfileHead'
import Posts from './Posts'

const Profile = props => {
  return (
    <>
      <ProfileHead />
      <Posts
        store={props.store}
        dispatch={props.dispatch}
        posts={props.posts}
      />
    </>
  )
}

export default Profile
