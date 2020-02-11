import {updateNewPostText, addPost} from '../../redux/profileReducer'
import Posts from './Posts'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const PostsContainer = connect(mapStateToProps, {
  updateNewPostText,
  addPost
})(Posts)

export default PostsContainer
