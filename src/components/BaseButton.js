import React from 'react'

const BaseButton = ({children, click}) => {
  return (
    <button onClick={click}>
      {children}
    </button>
  )
}

export default BaseButton