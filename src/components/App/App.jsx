import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PeoplePage from '../../pages/PeoplePage/PeoplePage'
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-lg">
        <Header />
        <WelcomeScreen />

        <Route path="/" exact>
          <RandomPlanet />
          <PeoplePage id={'4'} />
        </Route>

        <Route path="/people" component={PeoplePage} />
      </div>
    </BrowserRouter>
  )
}

export default App
