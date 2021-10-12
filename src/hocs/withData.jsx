import React, { Component } from 'react'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Spinner from '../components/Spinner/Spinner'

const withData = (Wrapped, getData) => {
  return class extends Component {
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

export default withData
