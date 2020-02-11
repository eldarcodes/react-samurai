import React from 'react'
import Preloader from '../../components/common/Preloader/Preloader'
import Pagination from '../../components/common/Pagination/Pagination'
import User from './User'

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <>
      <h3 className="title">Users</h3>
      <Pagination
        currentPage={props.currentPage}
        pages={pages}
        onPageChanged={props.onPageChanged}
      />
      {props.isFetching ? (
        <Preloader />
      ) : (
        props.users.map(u => (
          <div key={u.id} className="col s6">
            <User follow={props.follow} unfollow={props.unfollow} u={u} />
          </div>
        ))
      )}
    </>
  )
}

export default Users
