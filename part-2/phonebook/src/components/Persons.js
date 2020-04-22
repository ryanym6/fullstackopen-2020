import React from 'react'
const Entry = ({person}) => (
  <> {person.name} {person.number} <br/> </>
)
const Persons = ({persons}) => {
	return (
		<div>
			{persons.map(person => <Entry key={person.name} person={person} />)}
		</div>
	)
}
export default Persons
