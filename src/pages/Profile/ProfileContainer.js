import React from 'react'
import {connect} from 'react-redux'
import {getProfile} from './../../redux/profileReducer'
import {withRouter, Redirect} from 'react-router-dom'

import Profile from './Profile'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getProfile(userId)
  }

  render() {
    if (!this.props.isAuth) {
      alert('Войдите в ваш профиль!')
      return <Redirect to="/login" />
    }
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(
  withUrlDataContainerComponent
)
