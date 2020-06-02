import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Welcome = props => (
  <h1>Hello {props.name}!</h1>
)

Welcome.defaultProps = {
  name: 'React'
}

Welcome.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Welcome name="Explore and Learn" />,
    document.body.appendChild(document.createElement('div')),
  )
})
