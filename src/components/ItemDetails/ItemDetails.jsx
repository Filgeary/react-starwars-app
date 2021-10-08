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
    const { id, name, gender, birthYear, eyeColor } = itemDetails
    const { itemId } = this.props

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

        {!isError && Object.keys(itemDetails).length > 0 ? (
          <React.Fragment>
            <img
              className="item-details-image"
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt={name}
            />

            <div className="item-details-content card-body">
              <h3 className="item-details-title">{name}</h3>

              <ul className="list-group list-group-flush">
                <li className="item-details-item list-group-item">
                  <span className="item-details-term">Gender</span>
                  <span>{gender}</span>
                </li>
                <li className="item-details-item list-group-item">
                  <span className="item-details-term">Birth Year</span>
                  <span>{birthYear}</span>
                </li>
                <li className="item-details-item list-group-item">
                  <span className="item-details-term">Eye Color</span>
                  <span>{eyeColor}</span>
                </li>
              </ul>
            </div>
          </React.Fragment>
        ) : null}
      </section>
    )
  }
}

export default ItemDetails
