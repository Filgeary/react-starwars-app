import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Spinner from '../components/Spinner/Spinner'

const getDisplayName = Wrapped => {
  return Wrapped.displayName || Wrapped.name || 'Component'
}

const withData = (Wrapped, getData) => {
  const WithData = props => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const handleItemListLoaded = data => {
      setData(data)
      setIsLoading(false)
      setIsError(false)
    }

    const handleError = err => {
      setIsError(true)
      setIsLoading(false)
      console.error(err)
    }

    const updateItemList = useCallback(() => {
      setIsLoading(true)

      // prettier-ignore
      getData()
      .then(handleItemListLoaded)
      .catch(handleError)
    }, [])

    useEffect(() => {
      updateItemList()
    }, [updateItemList])

    if (isLoading) return <Spinner />
    if (isError) return <ErrorMessage />

    return data ? <Wrapped {...props} data={data} /> : null
  }
  WithData.displayName = `withData(${getDisplayName(Wrapped)})`

  return WithData
}

withData.propTypes = {
  Wrapped: PropTypes.elementType.isRequired,
  getData: PropTypes.func.isRequired,
}

export default withData
