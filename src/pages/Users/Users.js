import React from 'react'

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://via.placeholder.com/500',
        followed: true,
        fullname: 'Eldar',
        status: 'I am a boss',
        location: {city: 'Dnepr', country: 'Ukraine'}
      },
      {
        id: 2,
        photoUrl: 'https://via.placeholder.com/500',
        followed: false,
        fullname: 'Stanislav',
        status: 'middle',
        location: {city: 'Dnepr', country: 'Ukraine'}
      },
      {
        id: 3,
        photoUrl: 'https://via.placeholder.com/500',
        followed: true,
        fullname: 'Alexey',
        status: 'Newbee',
        location: {city: 'Dnepr', country: 'Ukraine'}
      }
    ])
  }

  return (
    <>
      <h3 className="title">Users</h3>
      {props.users.map(u => (
        <div key={u.id} className="col s4">
          <div className="card">
            <div className="card-image">
              <img alt={u.name} src={u.photoUrl} />
              <span className="card-title blue-text">{u.fullname}</span>
            </div>
            <div className="card-content ">
              <p className="col s6">{u.status}</p>
              <p className="col s6 right-align">
                {u.location.city}, {u.location.country}
              </p>
            </div>
            <div className="card-action">
              {u.followed ? (
                <button
                  className="btn blue"
                  onClick={() => props.unfollow(u.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button className="btn blue" onClick={() => props.follow(u.id)}>
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Users
