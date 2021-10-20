import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Spinner from '../Spinner/Spinner'
import './ItemDetails.css'

// Render Function
const Field = ({ item, prop, label }) => (
  <li className="item-details-item list-group-item">
    <span className="item-details-term">{label}</span>
    <span>{item[prop]}</span>
  </li>
)

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {
  const [item, setItem] = useState({})
  const [imageUrl, setImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const handleError = err => {
    setIsError(true)
    setIsLoading(false)
    console.error(err)
  }

  const handleItemLoaded = useCallback(
    itemData => {
      setItem(itemData)
      setImageUrl(getImageUrl(itemData))
      setIsLoading(false)
      setIsError(false)
    },
    [getImageUrl],
  )

  const updateItem = useCallback(
    id => {
      if (!id) return

      setIsLoading(true)

      // prettier-ignore
      getData(id)
      .then(handleItemLoaded)
      .catch(handleError)
    },
    [getData, handleItemLoaded],
  )

  useEffect(() => {
    updateItem(itemId)
  }, [itemId, updateItem])

  const { name } = item

  if (!itemId) {
    return (
      <section className="d-flex justify-content-center align-items-center">
        <h3>Choose Item on Left Panel</h3>
      </section>
    )
  }

  return (
    <section className="item-details card">
      {isLoading ? <Spinner /> : null}
      {isError ? <ErrorMessage /> : null}

      {!isError && Object.keys(item).length > 0 ? (
        <>
          <img className="item-details-image" src={imageUrl} alt={name} />

          <div className="item-details-content card-body">
            <h3 className="item-details-title">{name}</h3>

            <ul className="list-group list-group-flush">
              {React.Children.map(children, child => {
                return React.cloneElement(child, { item })
              })}
            </ul>
          </div>
        </>
      ) : null}
    </section>
  )
}

Field.propTypes = {
  item: PropTypes.object,
  prop: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

ItemDetails.propTypes = {
  itemId: PropTypes.string,
  getData: PropTypes.func.isRequired,
  getImageUrl: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default ItemDetails
export { Field }
