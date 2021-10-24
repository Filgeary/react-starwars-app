import PropTypes from 'prop-types'
import React, { useState } from 'react'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import ItemDetails, { Field } from '../../components/ItemDetails/ItemDetails'
import ItemList from '../../components/ItemList/ItemList'
import withData from '../../hocs/withData'
import SwapiService from '../../services/SwapiService'
import RowWrapper from '../../ui/RowWrapper'

const { getAllStarships, getStarship, getStarshipImageUrl } = new SwapiService()
const ItemListWithData = withData(ItemList, getAllStarships)

const StarshipsPage = ({ id }) => {
  const [itemSelected, setItemSelected] = useState(id || '')

  const handleItemSelected = itemId => {
    setItemSelected(itemId)
  }

  const ListElem = (
    <ErrorBoundary>
      <ItemListWithData onItemSelected={handleItemSelected} />
    </ErrorBoundary>
  )

  const DetailsElem = (
    <ErrorBoundary>
      <ItemDetails
        itemId={itemSelected}
        getData={getStarship}
        getImageUrl={getStarshipImageUrl}
      >
        <Field prop="model" label="Model" />
        <Field prop="manufacturer" label="Manufacturer" />
        <Field prop="costInCredits" label="Cost In Credits" />
        <Field prop="length" label="Length" />
        <Field prop="crew" label="Crew" />
        <Field prop="passengers" label="Passengers" />
        <Field prop="cargoCapacity" label="Cargo Capacity" />
      </ItemDetails>
    </ErrorBoundary>
  )

  return <RowWrapper left={ListElem} right={DetailsElem} />
}

StarshipsPage.propTypes = {
  id: PropTypes.string,
}

export default StarshipsPage
