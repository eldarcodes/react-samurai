import {
  updateNewPostTextActionCreator,
  addPostActionCreator
} from '../../redux/profileReducer'
import Posts from './Posts'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: text => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
