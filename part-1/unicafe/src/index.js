import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({setValueFunc, text}) => (
	<button onClick={setValueFunc}>{text}</button>
)

const Statistic = ({text, value}) => (
	<tr>
		<td> {text} </td>
		<td> {value} </td>
	</tr>
	
)

const Feedback = ({title, setGood, setNeutral, setBad}) => (
	<div>
		<h1>
			{title}
		</h1>
    <Button setValueFunc={setGood} text="good" />
    <Button setValueFunc={setNeutral} text="neutral" />
    <Button setValueFunc={setBad} text="bad" />
  </div>
)

const Statistics = ({good, neutral, bad}) => {
	const all = (good + neutral + bad)
	const avg = (good - bad) / all + '%'
	const positive = (good) / all * 100

	if (all !== 0) {
	  return(
			<div>
				<table>
					<tbody>
						<Statistic text='good' value={good} />	
						<Statistic text='neutral' value={neutral} />	
						<Statistic text='bad' value={bad} />	
						<Statistic text='all' value={all} />	
						<Statistic text='average' value={avg} />	
						<Statistic text='positive' value={positive} />
					</tbody>
				</table>
			</div>
  	)
	} else {
		return(
			<div>
				<p> No feedback given </p>
			</div> 	
		)
	}

}



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "give feedback"


  return (
    <div>
    	<Feedback 
    		title={title} 
    		setGood={ () => setGood(good + 1) }
    		setNeutral={ () => setNeutral(neutral + 1)}
    		setBad={ () => setBad(bad + 1)}
    	/>
	    <Statistics
	    	good={good}
	    	neutral={neutral}
	    	bad={bad}
	    />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)