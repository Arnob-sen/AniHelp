import React from 'react'

function Hr({value = 4}) {
    return (
      <hr className={`h-px my-${value} bg-gray-200 border-0 dark:bg-gray-700`}/>
    )
}

export default Hr
