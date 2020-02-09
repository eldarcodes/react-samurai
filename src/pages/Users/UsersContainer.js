import {connect} from 'react-redux'
import Users from './Users'
import {followAC, unfollowAC, setUsersAC} from '../../redux/usersReducer'

const mapStateToProps = state => {
  return {
    users: state.usersPage.users
  }
}
const mapDispatchToProps = dispatch => {
  return {
    follow: usersId => {
      dispatch(followAC(usersId))
    },
    unfollow: usersId => {
      dispatch(unfollowAC(usersId))
    },
    setUsers: users => {
      dispatch(setUsersAC(users))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
