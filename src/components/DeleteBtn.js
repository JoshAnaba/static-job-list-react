import React from 'react'

function DeleteBtn({deleteStack, stack}) {
  return (
    <button className="delete-btn" onClick={()=>deleteStack(stack)}>&times;</button>
  )
}

export default DeleteBtn
