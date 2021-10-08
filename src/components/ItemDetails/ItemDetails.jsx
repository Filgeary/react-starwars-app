import React, { Component } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Spinner from '../Spinner/Spinner'
import './ItemDetails.css'

class ItemDetails extends Component {
  state = {
    itemDetails: {},
    isLoading: true,
    isError: false,
  }

  handleError = err => {
    this.setState({ isError: true, isLoading: false })
    console.error(err)
  }

  handleItemLoaded = data => {
    this.setState({ itemDetails: data, isLoading: false, isError: false })
  }

  updateItem = () => {
    const { itemId, getData } = this.props
    if (!itemId) return

    this.setState({ isLoading: true })

    getData(itemId).then(this.handleItemLoaded).catch(this.handleError)
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
    const { itemDetails, isLoading, isError } = this.state
    const { itemId } = this.props

    if (!itemId) {
      return (
        <section className="d-flex justify-content-center align-items-center">
          <h3>Choose Item on Left Panel</h3>
        </section>
      )
    }

    return (
      <div className="item-details card">
        {isLoading ? <Spinner /> : null}
        {isError ? <ErrorMessage /> : null}
        {!isError && Object.keys(itemDetails).length > 0 ? (
          <ItemDetailsView itemDetails={itemDetails} />
        ) : null}
      </div>
    )
  }
}

const ItemDetailsView = ({ itemDetails }) => {
  const { id, name, gender, birthYear, eyeColor } = itemDetails

  return (
    <React.Fragment>
      <img
        className="item-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
      />

      <div className="item-content card-body">
        <h3 className="item-details-title">{name}</h3>

        <ul className="list-group list-group-flush">
          <li className="item-list-item list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="item-list-item list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="item-list-item list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default ItemDetails
