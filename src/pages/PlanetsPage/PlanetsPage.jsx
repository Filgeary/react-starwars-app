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

  const PlanetsListElem = (
    <ErrorBoundary>
      <ItemListWithData onItemSelected={handleItemSelected} />
    </ErrorBoundary>
  )

  const PlanetDetailsElem = (
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

  return <RowWrapper left={PlanetsListElem} right={PlanetDetailsElem} />
}

PlanetsPage.propTypes = {
  id: PropTypes.string,
}

export default PlanetsPage
