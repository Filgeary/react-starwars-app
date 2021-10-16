import PropTypes from 'prop-types'
import React from 'react'

const RowWrapper = ({ left, right }) => {
  return (
    <div className="row mb-2">
      <div className="col-md-5">{left}</div>
      <div className="col-md-7">{right}</div>
    </div>
  )
}

RowWrapper.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
}

export default RowWrapper
