import React from 'react'
import '../Pages.scss'
import Post from './Post'
import {
  updateNewPostTextActionCreator,
  addPostActionCreator
} from '../../redux/profileReducer'

const Posts = props => {
  let state = props.store.getState().profilePage

  let newPostText = state.newPostText

  const inputTextHandler = () => {
    props.dispatch(addPostActionCreator())
  }

  const onInputChange = e => {
    props.dispatch(updateNewPostTextActionCreator(e.target.value))
  }
  return (
    <div className="posts">
      <div className="create_post">
        <h4>My posts</h4>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              placeholder="Post"
              onChange={onInputChange}
              className="materialize-textarea"
              value={newPostText}
            />
          </div>
        </div>
        <div className="btn-wrapper">
          <button
            onClick={inputTextHandler}
            className="blue btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
      {props.posts.map((item, i) => (
        <Post key={i} message={item.message} likes={item.likesCount} />
      ))}
    </div>
  )
}

export default Posts
