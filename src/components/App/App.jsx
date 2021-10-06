import React, { Component } from 'react'
import PeoplePage from '../../pages/PeoplePage/PeoplePage'
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen'
import './App.css'

// TODO: add Error Boundaries

class App extends Component {
  render() {
    return (
      <div className="container-lg">
        <Header />
        <WelcomeScreen />
        <RandomPlanet />

        <PeoplePage />
      </div>
    )
  }
}

export default App
