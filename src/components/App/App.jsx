import React from 'react'
import PeoplePage from '../../pages/PeoplePage/PeoplePage'
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen'
import './App.css'

const App = () => {
  return (
    <div className="container-lg">
      <Header />
      <WelcomeScreen />
      <RandomPlanet />

      <PeoplePage id={'4'} />
    </div>
  )
}

export default App
