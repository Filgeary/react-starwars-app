import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Spinner from '../components/Spinner/Spinner'

const getDisplayName = Wrapped => {
  return Wrapped.displayName || Wrapped.name || 'Component'
}

const withData = (Wrapped, getData) => {
  return class extends Component {
    static displayName = `withData(${getDisplayName(Wrapped)})`

    state = {
      data: null,
      isLoading: true,
      isError: false,
    }

    handleItemListLoaded = data => {
      this.setState({ data: data, isLoading: false, isError: false })
    }

    handleError = err => {
      this.setState({ isError: true, isLoading: false })
      console.error(err)
    }

    updateItemList = () => {
      this.setState({ isLoading: true })

      // prettier-ignore
      getData()
      .then(this.handleItemListLoaded)
      .catch(this.handleError)
    }

    componentDidMount() {
      this.updateItemList()
    }

    render() {
      const { data, isLoading, isError } = this.state

      if (isLoading) return <Spinner />
      if (isError) return <ErrorMessage />

      return data ? <Wrapped {...this.props} data={data} /> : null
    }
  }
}

withData.propTypes = {
  Wrapped: PropTypes.elementType.isRequired,
  getData: PropTypes.func.isRequired,
}

export default withData
