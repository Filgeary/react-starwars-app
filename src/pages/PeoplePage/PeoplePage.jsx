import React, { Component } from 'react'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import ItemDetails, { Field } from '../../components/ItemDetails/ItemDetails'
import ItemList from '../../components/ItemList/ItemList'
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
    const { getAllPeople, getPerson, getPersonImageUrl } = swapiService

    const PeopleListElem = (
      <ErrorBoundary>
        <ItemList
          onItemSelected={this.handleItemSelected}
          getData={getAllPeople}
        />
      </ErrorBoundary>
    )
    const PersonDetailsElem = (
      <ErrorBoundary>
        <ItemDetails
          itemId={itemSelected}
          getData={getPerson}
          getImageUrl={getPersonImageUrl}
        >
          <Field prop="gender" label="Gender" />
          <Field prop="birthYear" label="Birth Year" />
          <Field prop="eyeColor" label="Eye Color" />
        </ItemDetails>
      </ErrorBoundary>
    )

    return <RowWrapper left={PeopleListElem} right={PersonDetailsElem} />
  }
}

export default PeoplePage
