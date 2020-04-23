import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'
import './App.css';

function App() {
	const [conFilter, setConFilter] = useState('can')
	const [countries, setCountries] = useState([])

	const countriesUrl = 'https://restcountries.eu/rest/v2/all'
  useEffect(() => {
    axios
      .get(countriesUrl).then(response => {
        setCountries(response.data)
      })
  }, [])

  const displayCountries = conFilter ? 
  	countries.filter(c => 
 			c.name.toLowerCase().search(conFilter.toLowerCase()) !== -1
  	) : countries

  const handleFilterChange = (event) => {
  	setConFilter(event.target.value)
  }

  return (
  	<div>
  	<Filter conFilter={conFilter} handleFilterChange={handleFilterChange} />
  	<Countries countries={displayCountries} setConFilter={(f) => setConFilter(f)} />
  	</div>

  )

}

export default App;
