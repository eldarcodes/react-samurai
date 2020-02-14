import React from 'react'
import {NavLink} from 'react-router-dom'

import userPNG from '../../assets/user.png'

const User = props => {
  return (
    <div className="card">
      <div className="card-image">
        <NavLink to={`/profile/${props.u.id}`}>
          <img
            alt={props.u.name}
            src={props.u.photos.small != null ? props.u.photos.small : userPNG}
          />
        </NavLink>
        <span className="card-title blue-text">{props.u.status}</span>
      </div>
      <div className="card-content ">
        <p className="col s6">{props.u.name}</p>
        <p className="col s6 right-align truncate">City, Country</p>
      </div>
      <div className="card-action right-align">
        {props.u.followed ? (
          <button
            disabled={props.isFetchingFollow.some(id => id === props.u.id)}
            className="btn blue"
            onClick={() => props.unfollow(props.u.id)}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => props.follow(props.u.id)}
            className="btn blue"
            disabled={props.isFetchingFollow.some(id => id === props.u.id)}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  )
}

export default User
