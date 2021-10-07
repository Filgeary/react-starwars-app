import React, { Component } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) return <ErrorMessage />

    return this.props.children
  }
}

export default ErrorBoundary
