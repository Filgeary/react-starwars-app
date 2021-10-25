import React from 'react'
import './WelcomeStory.css'

const WelcomeStory = () => {
  return (
    <section className="welcome-story">
      <h2 className="visually-hidden">Star Wars opening crawl</h2>

      <div className="welcome-story__wrap">
        <p className="welcome-story__content">
          It is a period of civil war. Rebel spaceships, striking from a hidden
          base, have won their first victory against the evil Galactic Empire.
        </p>
        <p className="welcome-story__content">
          During the battle, Rebel spies managed to steal secret plans to the
          Empire's ultimate weapon, the DEATH STAR, an armored space station
          with enough power to destroy an entire planet.
        </p>
        <p className="welcome-story__content">
          Pursued by the Empire's sinister agents, Princess Leia races home
          aboard her starship, custodian of the stolen plans that can save her
          people and restore freedom to the galaxy ...
        </p>
      </div>
    </section>
  )
}

export default WelcomeStory
