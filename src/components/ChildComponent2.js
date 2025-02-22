import React from 'react'

const ChildComponent2 = ({setSelectedOption}) => {
  return (
    <div className='child2'>
        <p>Child Component 2</p>
        <button onClick={()=>setSelectedOption("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildComponent2