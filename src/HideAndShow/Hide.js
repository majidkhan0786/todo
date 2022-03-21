import React, { useState } from 'react'

function Hide() {
    const [status , setstatus] = useState(true)
  return (
   <>
   <div className='hide'>
       {
           status? <h1>Show the Content World! </h1> : null
       }

       <button onClick={()=> setstatus(false)}>Hide </button>
       <button onClick={()=>setstatus(true)}>Show </button>
   </div>
   </>
  )
}

export default Hide;