import React from 'react'

const Part = ({part}) => {
  // console.log(part)
  const {name, exercises} = part
  // console.log(name, exercises)
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

export default Part