const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
  posts: [
    {id: 1, message: '123', likesCount: 11},
    {id: 2, message: '321', likesCount: 13},
    {id: 3, message: 'asd', likesCount: 9}
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }
      return {...state, newPostText: '', posts: [...state.posts, newPost]}
    }
    case UPDATE_NEW_POST_TEXT: {
      return {...state, newPostText: action.newText}
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer
