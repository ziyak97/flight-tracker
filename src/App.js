import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import FLIGHT_DATA from './flights.data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      flightData: FLIGHT_DATA,
      searchFeild: ''
    }
  }
 

  handleChange = (e) => {
    this.setState({searchFeild: e.target.value})
  }
  render() {
    const { flightData, searchFeild } = this.state
    const filteredFlightData = flightData.filter(flight =>
      flight.flight_no.toLowerCase().includes(searchFeild.toLowerCase())
    )

    return (
      <div className="App">

        <h1>Flight Tracker</h1>

        <SearchBox
          placeholder="search flight number"
          handleChange={this.handleChange}
        />

        <CardList flightData={filteredFlightData} />

      </div>
    )
  }
}
export default App;
