import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import phonebookService from './services/phonebook'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')
  const [ status, setStatus] = useState(-1)
  const [ msgName, setMsgName] = useState('')


  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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
      phonebookService
        .create(person)
        .then(newPerson => {setPersons(persons.concat(newPerson));
                            setStatus(0);
                            setMsgName(person.name)})

      setNewName('')
      setNewNumber('')

      setTimeout(() => {
        setStatus(-1);
        setMsgName("")
      }, 3000)


    } else {
      const result = window.confirm(`${person.name} is already added to phonebook, replace old number with a new one?`)
      if (result){
        phonebookService
          .update(exist.id, person)
          .then(updatedPerson => {setPersons(persons.map(p => p.id === updatedPerson.id? updatedPerson: p))})
          .catch(err => {
            setStatus(1)
            setMsgName(person.name)
          })

        setTimeout(() => {
          setStatus(-1);
          setMsgName("")
        }, 3000)

      }
    }
  }

  const deletePerson = (person) => {
    const result = window.confirm(`Delete ${person.name}`)
    if (result) {
      phonebookService
      .deleteById(person.id)
      .then(() => {setPersons(persons.filter(p => p.id !== person.id))})
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
      <Notification name={msgName} status={status} />
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
      <Persons persons={displayPersons} handleDelete={(person) => deletePerson(person)}/>
    </div>
  )
}

export default App