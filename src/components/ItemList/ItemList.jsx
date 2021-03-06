import PropTypes from 'prop-types'
import React from 'react'
import './ItemList.css'

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
    // prettier-ignore
    <ul className="item-list list-group">
      {mappedItems}
    </ul>
  )
}

ItemList.propTypes = {
  data: PropTypes.array.isRequired,
  onItemSelected: PropTypes.func.isRequired,
}

export default ItemList
