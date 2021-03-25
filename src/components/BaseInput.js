import React from 'react'

const BaseInput = ({value, change}) => {
  return (
    <input value={value} onChange={change}/>
  )
}

export default BaseInput