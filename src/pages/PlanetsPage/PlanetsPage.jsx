import PropTypes from 'prop-types'
import React, { useState } from 'react'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import ItemDetails, { Field } from '../../components/ItemDetails/ItemDetails'
import ItemList from '../../components/ItemList/ItemList'
import withData from '../../hocs/withData'
import SwapiService from '../../services/SwapiService'
import RowWrapper from '../../ui/RowWrapper'

const { getAllPlanets, getPlanet, getPlanetImageUrl } = new SwapiService()
const ItemListWithData = withData(ItemList, getAllPlanets)

const PlanetsPage = ({ id }) => {
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
        getData={getPlanet}
        getImageUrl={getPlanetImageUrl}
      >
        <Field prop="population" label="Population" />
        <Field prop="rotationPeriod" label="Rotation Period" />
        <Field prop="diameter" label="Diameter" />
      </ItemDetails>
    </ErrorBoundary>
  )

  return (
    <>
      <h2 className="mb-3">Planets</h2>
      <RowWrapper left={ListElem} right={DetailsElem} />
    </>
  )
}

PlanetsPage.propTypes = {
  id: PropTypes.string,
}

export default PlanetsPage
