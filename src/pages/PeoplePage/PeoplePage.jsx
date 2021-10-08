import React, { Component } from 'react'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import ItemList from '../../components/ItemList/ItemList'
import ItemDetails from '../../components/ItemDetails/ItemDetails'
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
    const itemDetailsElem = (
      <ErrorBoundary>
        <ItemDetails itemId={itemSelected} getData={swapiService.getPerson} />
      </ErrorBoundary>
    )

    return <RowWrapper left={itemListElem} right={itemDetailsElem} />
  }
}

export default PeoplePage
