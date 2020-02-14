import {usersAPI} from './../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FETCHING_FOLLOW = 'TOGGLE_IS_FETCHING_FOLLOW'

let initialState = {
  users: [],
  pageSize: 8,
  totalUsersCount: 80,
  currentPage: 1,
  isFetching: false,
  isFetchingFollow: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }
    case SET_USERS:
      return {...state, users: [...action.users]}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    case TOGGLE_IS_FETCHING_FOLLOW:
      return {
        ...state,
        isFetchingFollow: action.isFetching
          ? [...state.isFetchingFollow, action.userId]
          : state.isFetchingFollow.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

export const followSuccess = userId => ({type: FOLLOW, userId})
export const unfollowSuccess = userId => ({type: UNFOLLOW, userId})
export const setUsers = users => ({type: SET_USERS, users})
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})
export const toggleIsFetchingFollow = (isFetching, userId) => ({
  type: TOGGLE_IS_FETCHING_FOLLOW,
  isFetching,
  userId
})

export const getUsers = (pageNumber, pageSize) => {
  return dispatch => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(pageNumber))

    usersAPI.getUsers(pageNumber, pageSize).then(({data}) => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
    })
  }
}

export const follow = userId => {
  return dispatch => {
    dispatch(toggleIsFetchingFollow(true, userId))

    usersAPI
      .follow(userId)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
      })
      .finally(() => dispatch(toggleIsFetchingFollow(false, userId)))
  }
}

export const unfollow = userId => {
  return dispatch => {
    dispatch(toggleIsFetchingFollow(true, userId))

    usersAPI
      .unfollow(userId)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
      })
      .finally(() => dispatch(toggleIsFetchingFollow(false, userId)))
  }
}

export default usersReducer
