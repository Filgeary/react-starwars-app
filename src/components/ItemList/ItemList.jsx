import React from 'react'
import withData from '../../hocs/withData'
import SwapiService from '../../services/SwapiService'
import './ItemList.css'

const { getAllPeople } = new SwapiService()

const ItemList = ({ data, onItemSelected }) => {
  const renderItems = (itemList, onItemSelected) => {
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

  const mappedItems = data.length > 0 ? renderItems(data, onItemSelected) : null

  return (
    <ul className="item-list list-group">
      {data.length > 0 ? mappedItems : null}
    </ul>
  )
}

export default withData(ItemList, getAllPeople)
