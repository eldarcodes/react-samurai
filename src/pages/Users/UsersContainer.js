import React from 'react'
import {connect} from 'react-redux'
import {
  follow,
  unfollow,
  toggleIsFetchingFollow,
  getUsers
} from '../../redux/usersReducer'
import Users from './Users'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageNumber, this.props.pageSize)
  }

  onPageChanged = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return (
      <>
        <Users onPageChanged={this.onPageChanged} {...this.props} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFetchingFollow: state.usersPage.isFetchingFollow
  }
}

export default connect(mapStateToProps, {
  toggleIsFetchingFollow,
  getUsers,
  follow,
  unfollow
})(UsersContainer)
