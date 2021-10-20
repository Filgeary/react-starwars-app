import React, { useState } from 'react'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import ItemDetails, { Field } from '../../components/ItemDetails/ItemDetails'
import ItemList from '../../components/ItemList/ItemList'
import withData from '../../hocs/withData'
import SwapiService from '../../services/SwapiService'
import RowWrapper from '../../ui/RowWrapper'

const { getAllPeople, getPerson, getPersonImageUrl } = new SwapiService()
const ItemListWithData = withData(ItemList, getAllPeople)

const PeoplePage = ({ id = '4' }) => {
  const [itemSelected, setItemSelected] = useState(id)

  const handleItemSelected = itemId => {
    setItemSelected(itemId)
  }

  const PeopleListElem = (
    <ErrorBoundary>
      <ItemListWithData onItemSelected={handleItemSelected} />
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

export default PeoplePage
