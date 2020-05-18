import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api'

import './CountryPicker.css'

const CountryPicker = ({handleCountryChange}) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountriesData = async () => {
      const data = await fetchCountries()
      setCountries(data.data.countries)
    }
    fetchCountriesData()
  }, [])

  if (!countries) {
    return null
  }

  return (
    <FormControl className="formControl">
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) =>
          <option key={i} value={country.name}>{country.name}</option>
        )}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
