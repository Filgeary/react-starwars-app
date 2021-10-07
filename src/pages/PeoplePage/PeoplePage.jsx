import React, { Component } from 'react'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import ItemList from '../../components/ItemList/ItemList'
import PersonDetails from '../../components/PersonDetails/PersonDetails'
import SwapiService from '../../services/SwapiService'
import RowWrapper from '../../ui/RowWrapper'

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

    const itemListElem = (
      <ErrorBoundary>
        <ItemList
          onItemSelected={this.handleItemSelected}
          getData={swapiService.getAllPeople}
        />
      </ErrorBoundary>
    )
    const personDetailsElem = (
      <ErrorBoundary>
        <PersonDetails itemId={itemSelected} />
      </ErrorBoundary>
    )

    return <RowWrapper left={itemListElem} right={personDetailsElem} />
  }
}

export default PeoplePage
