import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Cards, Chart, CountryPicker} from './components'
import {fetchData} from './api'
import './App.css'
import coronaItem from './images/image.png'

const url = 'https://covid19.mathdro.id/api'

const App = () => {

  const [data, setData] = useState({})
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    setCountry(country)
    setData(fetchedData)
  }

  useEffect(async () => {
    const fetchedData = await fetchData()
    console.log("Fetched data", fetchedData)
    setData(fetchedData)
  }, [])

  return (
    <div className="container">
      <img className="image" src={coronaItem} alt="COVID-19"/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  )
}

export default App;
