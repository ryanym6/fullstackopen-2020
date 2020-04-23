import React from 'react'
import Country from './Country'

const Countries = ({countries, setConFilter}) => {
	const len = countries.length
	if (len === 1){
		return (
			<div>
				<table>
					<tbody>
						{countries.map(dc => <Country country={dc} showDetails={true} setConFilter={setConFilter} key={dc.name} />)}
					</tbody>
				</table>
			</div>
		)
	} else if (len <= 10){
		return (
			<div>
				<table>
					<tbody>
						{countries.map(dc => <Country country={dc} showDetails={false} setConFilter={setConFilter} key={dc.name} />)}
					</tbody>
				</table>
			</div>
		)
	} else {
		return (
			<p>Too many matches, specify another filter</p>
		)
	}

}
export default Countries