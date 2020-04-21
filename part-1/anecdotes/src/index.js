import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecodote = ({anecdotes, selected, stats}) => {
	// console.log(selected, stats)
	let votes = 0
	if (selected in stats){
			votes = stats[selected]
	}
	return (
		<div>
			<p>
				{anecdotes[selected]} <br/>
				has {votes} votes
			</p>
		</div>
	) 
}

const Button = ({onClickFunc, text}) => (
	<button onClick={onClickFunc}>{text}</button>
)

const Title = ({text}) => (
	<h1> {text} </h1>
)

const App = ({anecdotes}) => {
	const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))
  const [selected, setSelected] = useState(getRandomInt(anecdotes.length))
  const [stats, setStats] = useState({})
  const anecdoteTitle = "Anecodote of the day"
  const mostVotesTitle = "Anecodote with most votes"
  
  const voteAnecdote = () => {
		const statsCopy = {...stats}
		const cur = statsCopy[selected] || 0
		statsCopy[selected] = cur + 1
		setStats(statsCopy)
  }

  const getMostVotedAnecdote = () => {
  	let max = 0
  	let maxKey = 0

  	for (let key in stats) {
  		if (stats[key] >= max){
  			max = stats[key]
  			maxKey = key
  		}
  	}
  	// console.log(stats)
  	// console.log("max key: ", maxKey)
  	return maxKey
  }
  
  return (
    <div>
    	<Title text={anecdoteTitle} /> 
      <Anecodote anecdotes={anecdotes} selected={selected} stats={stats} />
      <Button onClickFunc={voteAnecdote} text="vote"/>
      <Button onClickFunc={() => setSelected(getRandomInt(anecdotes.length))} text="next anecdote"/>
    	<Title text={mostVotesTitle} /> 
    	<Anecodote anecdotes={anecdotes} selected={getMostVotedAnecdote()} stats={stats} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)