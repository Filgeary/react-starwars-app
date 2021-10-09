import React, { Component } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Spinner from '../Spinner/Spinner'
import './ItemDetails.css'

// Render Function
export const Field = ({ item, prop, label }) => (
  <li className="item-details-item list-group-item">
    <span className="item-details-term">{label}</span>
    <span>{item[prop]}</span>
  </li>
)

class ItemDetails extends Component {
  state = {
    item: {},
    imageUrl: '',
    isLoading: true,
    isError: false,
  }

  handleError = err => {
    this.setState({ isError: true, isLoading: false })
    console.error(err)
  }

  handleItemLoaded = itemData => {
    const { getImageUrl } = this.props

    this.setState({
      item: itemData,
      imageUrl: getImageUrl(itemData),
      isLoading: false,
      isError: false,
    })
  }

  updateItem = () => {
    const { itemId, getData } = this.props
    if (!itemId) return

    this.setState({ isLoading: true })

    getData(itemId)
      .then(this.handleItemLoaded)
      .catch(this.handleError)
      .finally(console.log(itemId)) // only for dev
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  render() {
    const { item, imageUrl, isLoading, isError } = this.state
    const { name } = item
    const { itemId, children } = this.props

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
          <React.Fragment>
            <img className="item-details-image" src={imageUrl} alt={name} />

            <div className="item-details-content card-body">
              <h3 className="item-details-title">{name}</h3>

              <ul className="list-group list-group-flush">
                {React.Children.map(children, child => {
                  return React.cloneElement(child, { item })
                })}
              </ul>
            </div>
          </React.Fragment>
        ) : null}
      </section>
    )
  }
}

export default ItemDetails
