import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Weather = ({city}) => {
	const [weather, setWeather] = useState({})
	const apiKey = process.env.REACT_APP_API_KEY
	const baseUrl = "http://api.weatherstack.com"
	const url = `${baseUrl}/current?access_key=${apiKey}&query=${city}`;
	console.log(url)
	useEffect(() => {
		axios.get(url).then(response => {
				console.log(response.data)
				setWeather({
					temperature: response.data.current.temperature,
					icon: response.data.current.weather_icons[0],
					wind_speed: response.data.current.wind_speed,
					wind_dir: response.data.current.wind_dir
				})
			})
	},[])
	console.log(weather)
	if (weather !== undefined) {
		return (
	    <div>
	      <h3>Weather in {city}</h3>
	      <p>
	        <strong>temperature:</strong> {weather.temperature} celsius
	      </p>
	      <img src={weather.icon} alt="icon" />
	      <p>
	        <strong>wind:</strong> {weather.wind_speed} kph direction {weather.wind_dir}
	      </p>
	    </div>
		)
	} else {
		return null
	}

}

export default Weather