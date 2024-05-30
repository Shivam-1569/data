import React from 'react'

function Tasks({title, description, deleteButton, index}) {
  return (
    <div id='task'>
        <div id='box-1'>
            <p>{title}</p>
            <span style={{color: "#0009"}}>{description}</span>
        </div>
        <div >
            <button id='box-2' onClick={()=>deleteButton(index)}>-</button>
        </div>
    </div>
  )
}

export default Tasks