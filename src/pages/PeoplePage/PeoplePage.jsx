import React, { Component } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import PersonDetails from '../../components/PersonDetails/PersonDetails'
import SwapiService from '../../services/SwapiService'

const swapiService = new SwapiService()

class PeoplePage extends Component {
  state = {
    itemSelected: '',
  }

  handleItemSelected = id => {
    this.setState({ itemSelected: id })
  }

  render() {
    const { itemSelected } = this.state

    return (
      <div className="row mb-2">
        <div className="col-md-5">
          <ItemList
            onItemSelected={this.handleItemSelected}
            getData={swapiService.getAllPeople}
          />
        </div>
        <div className="col-md-7">
          <PersonDetails itemId={itemSelected} />
        </div>
      </div>
    )
  }
}

export default PeoplePage
