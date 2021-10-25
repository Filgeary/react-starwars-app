import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PeoplePage from '../../pages/PeoplePage/PeoplePage'
import PlanetsPage from '../../pages/PlanetsPage/PlanetsPage'
import StarshipsPage from '../../pages/StarshipsPage/StarshipsPage'
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage'
import WelcomeStory from '../WelcomeStory/WelcomeStory'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-lg">
        <Header />

        <Route path="/" exact>
          <WelcomeMessage />
          <RandomPlanet />
          <WelcomeStory />
        </Route>

        <Route path="/people" component={PeoplePage} />
        <Route path="/planets" component={PlanetsPage} />
        <Route path="/starships" component={StarshipsPage} />
      </div>
    </BrowserRouter>
  )
}

export default App
