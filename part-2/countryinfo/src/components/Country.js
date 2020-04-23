import React from 'react'
import Weather from './Weather'
const Country = ({country, showDetails, setConFilter}) => {
	if (showDetails) {
		return (
			<tr><td> 
         	<h1>{country.name}</h1>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h3>Spoken languages</h3>
          <ul>
            {country.languages.map(lang => {
              return <li key={lang.name}>{lang.name}</li>
            })}
          </ul>
          <img src={country.flag} width="150px" alt="flag" />
          <Weather city={country.capital} />

			</td></tr>
		)
	}
	return (
		<tr>
			<td> {country.name} </td>
			<td> <button onClick={() => setConFilter(country.name)}> show </button> </td>
		</tr>
	)
}
export default Country