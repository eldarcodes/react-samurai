import React from 'react'

const Pagination = props => {
  return (
    <ul className="pagination center-align">
      <li
        onClick={() =>
          props.currentPage !== props.pages[0] &&
          props.onPageChanged(props.currentPage - 1)
        }
        className={`waves-effect ${
          props.currentPage === props.pages[0] ? 'disabled' : ''
        }`}
      >
        <a href="#!">
          <i className="material-icons">chevron_left</i>
        </a>
      </li>
      {props.pages.map(p => {
        return (
          <li
            key={p}
            onClick={() => {
              props.onPageChanged(p)
            }}
            className={
              props.currentPage === p ? 'active waves-effect' : 'waves-effect'
            }
          >
            <a href="#!">{p}</a>
          </li>
        )
      })}
      <li
        onClick={() =>
          props.currentPage !== props.pages[props.pages.length - 1] &&
          props.onPageChanged(props.currentPage + 1)
        }
        className={`waves-effect ${
          props.currentPage === props.pages[props.pages.length - 1]
            ? 'disabled'
            : ''
        }`}
      >
        <a href="#!">
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
    </ul>
  )
}

export default Pagination
