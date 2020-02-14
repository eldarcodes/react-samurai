import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {toggleIsFetching, authMe} from '../../redux/authReducer'

export class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe()
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {
  toggleIsFetching,
  authMe
})(HeaderContainer)
