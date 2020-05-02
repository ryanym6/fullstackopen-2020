import React from 'react'

const Notification = ({name, status}) => {
  const successStyle = {
    color: 'green',
    fontSize: 20,
    backgroundColor: 'lightgrey',
    border: '5px solid green',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  }

  const failureStyle = {
    color: 'red',
    fontSize: 20,
    backgroundColor: 'lightgrey',
    borderStyle: 'solid',
		border: '5px solid red',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  }

  const successMsg = `Added ${name}`
  const failureMsg = `Information of ${name} has already been removed from server`
  const errorMsg = `${name}`
  if (status === 1){
  	return (
  		<p style={failureStyle}> {errorMsg} </p>
  	)
  } else if (status === 2) {
  	return (
  		<p style={failureStyle}> {failureMsg} </p>
  	)
  } else if (status === 0) {
  	return (
  		<p style={successStyle}> {successMsg} </p>
  	)
  } else {
  	return null
  }

}

export default Notification
