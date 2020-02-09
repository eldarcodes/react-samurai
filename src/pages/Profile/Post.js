import React from 'react'
import '../Pages.scss'

const Post = props => {
  return (
    <div className="post z-depth-1">
      <div className="post_item">
        <img
          className="post_img"
          alt="post_img"
          src="https://via.placeholder.com/50"
        />
        <span>{props.message}</span>
      </div>
      <div className="post_likes">
        <div className="btn blue">{props.likes} likes</div>
      </div>
    </div>
  )
}

export default Post
