import React from 'react'
import '../Pages.scss'
import Post from './Post'

const Posts = props => {
  const onAddPost = () => {
    props.newPostText
    ? props.addPost()
    : alert('Введите текст поста!')
    
  }

  const onInputChange = e => {
    props.updateNewPostText(e.target.value)
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
              value={props.newPostText}
            />
          </div>
        </div>
        <div className="btn-wrapper">
          <button
            onClick={onAddPost}
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
