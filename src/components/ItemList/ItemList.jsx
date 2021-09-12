import React, { Component } from 'react'
import SwapiService from '../../services/SwapiService'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Spinner from '../Spinner/Spinner'
import './ItemList.css'

const swapiService = new SwapiService()

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
    this.setState({ isLoading: true })

    swapiService
      .getAllPeople()
      .then(this.handleItemListLoaded)
      .catch(this.handleError)
  }

  componentDidMount() {
    this.updateItemList()
  }

  render() {
    const { itemList, isLoading, isError } = this.state
    const { onItemSelected } = this.props

    return (
      <ul className="item-list list-group">
        {isLoading ? <Spinner /> : null}
        {isError ? <ErrorMessage /> : null}

        {!isLoading && !isError && itemList.length > 0 ? (
          <ItemListView itemList={itemList} onItemSelected={onItemSelected} />
        ) : null}
      </ul>
    )
  }
}

const ItemListView = ({ itemList, onItemSelected }) => {
  return itemList.map(item => {
    const { id, name } = item

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

export default ItemList
