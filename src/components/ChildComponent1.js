import React from 'react'

const ChildComponent1 = ({setSelectedOption}) => {
  return (
    <div className='child1'>
        <p>Child Component 1</p>
        <button onClick={()=>setSelectedOption("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildComponent1