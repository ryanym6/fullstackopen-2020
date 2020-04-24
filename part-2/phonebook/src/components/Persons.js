import React from 'react'

const Persons = ({persons, handleDelete}) => {
	return (
		<div>
			<table>
				<tbody>
					{persons.map(person => 
						// <Entry key={person.name} person={person} handleDelete={handleDelete}/>
						<tr key={person.name}>
					  	<td> {person.name} </td>
					  	<td>  {person.number} </td>
					  	<td> <button onClick={() => handleDelete(person)}> delete </button> </td>
					  </tr>
						)}

				</tbody>
			</table>
		</div>
	)
}
export default Persons
