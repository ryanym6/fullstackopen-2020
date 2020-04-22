import React from 'react'

const Total = ({parts}) => {
  const sum = parts.reduce((s, part) => s += part.exercises, 0)
  // console.log(sum)
  return (
    <div>
      <p>
        <b>total of {sum} exercises</b>
      </p>
    </div>
  )
}

export default Total