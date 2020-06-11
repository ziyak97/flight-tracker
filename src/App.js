import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import Axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      flightData: [],
      searchFeild: ''
    }
  }

  componentDidMount() {
    const getData = async () => {
      const data = await Axios.get('http://localhost:5000/api/flight-data')
      this.setState({
        flightData: data.data
      })
    }
    getData()
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
