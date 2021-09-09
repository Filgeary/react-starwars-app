import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <p className="error-message-text">
        Oops! Something Wrong! <br />
        Please, try again later.
      </p>
    </div>
  )
}

export default ErrorMessage
