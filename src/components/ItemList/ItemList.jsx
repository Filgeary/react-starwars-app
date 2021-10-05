import React, { Component } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Spinner from '../Spinner/Spinner'
import './ItemList.css'

class ItemList extends Component {
  state = {
    itemList: [],
    isLoading: true,
    isError: false,
  }

  handleItemListLoaded = data => {
    this.setState({ itemList: data, isLoading: false, isError: false })
  }

  handleError = err => {
    this.setState({ isError: true, isLoading: false })
    console.error(err)
  }

  updateItemList = () => {
    const { getData } = this.props

    this.setState({ isLoading: true })

    getData().then(this.handleItemListLoaded).catch(this.handleError)
  }

  componentDidMount() {
    this.updateItemList()
  }

  renderItems = (itemList, onItemSelected) => {
    return itemList.map(({ id, name }) => {
      return (
        <li
          key={id}
          className="item-list-item list-group-item"
          tabIndex="0"
          onClick={() => onItemSelected(id)}
        >
          <span>{name}</span>
          <span className="item-list-id">#{id}</span>
        </li>
      )
    })
  }

  render() {
    const { itemList, isLoading, isError } = this.state
    const { onItemSelected } = this.props

    const mappedListItems =
      itemList.length > 0 ? this.renderItems(itemList, onItemSelected) : null

    return (
      <ul className="item-list list-group">
        {isLoading ? <Spinner /> : null}
        {isError ? <ErrorMessage /> : null}

        {!isLoading && !isError && itemList.length > 0 ? mappedListItems : null}
      </ul>
    )
  }
}

export default ItemList
