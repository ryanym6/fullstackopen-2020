import React from 'react'

const Filter = ({
	conFilter,
	handleFilterChange 
}) => {

	return (
		<div>
      <form>
	      <div>
	        filter countries <input value={conFilter} onChange={handleFilterChange} />
	      </div>
	    </form>
		</div>
	)
}

export default Filter
