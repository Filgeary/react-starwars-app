import React, { Component } from 'react'
import './PersonDetails.css'

class PersonDetails extends Component {
  render() {
    return (
      <div className="person-details card">
        <img
          className="person-image"
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
          alt="person"
        />

        <div className="card-body pt-0">
          <h3 className="person-details-title">R2-D2</h3>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PersonDetails
