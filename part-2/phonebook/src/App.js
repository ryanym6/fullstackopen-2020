import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
    { name: 'a', number: '123' },
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')


  useEffect(() => {
  axios
    .get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
}, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = { 
      name: newName,
      number: newNumber
    }

    const exist = persons.find(p => p.name === person.name)
    
    if (exist === undefined ){
      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    } else {
      alert(newName + ' is already added to Phonebook')
    }
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const displayPersons = newFilter ? 
    persons.filter(person => person.name.
        toLowerCase().search(newFilter.toLowerCase()) !== -1) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={displayPersons}/>
    </div>
  )
}

export default App