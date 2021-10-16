import React, { Component } from 'react'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import ItemDetails, { Field } from '../../components/ItemDetails/ItemDetails'
import ItemList from '../../components/ItemList/ItemList'
import withData from '../../hocs/withData'
import SwapiService from '../../services/SwapiService'
import RowWrapper from '../../ui/RowWrapper'

const { getAllPeople, getPerson, getPersonImageUrl } = new SwapiService()
const ItemListWithData = withData(ItemList, getAllPeople)

class PeoplePage extends Component {
  state = {
    itemSelected: '4',
  }

  handleItemSelected = id => {
    this.setState({ itemSelected: id })
  }

  render() {
    const { itemSelected } = this.state

    const PeopleListElem = (
      <ErrorBoundary>
        <ItemListWithData onItemSelected={this.handleItemSelected} />
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
