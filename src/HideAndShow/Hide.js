import React, { useState } from "react";

function Hide() {
  const [status, setstatus] = useState(true);
  return (
    <>
      <div className="hide">
        {status ? <h1>Show the Content World! </h1> : null}

        <button onClick={() => setstatus(false)}>Hide </button>
        <button onClick={() => setstatus(true)}>Show </button>
      </div>
    </>
  );
}

export default Hide;


// https://github.com/charanpy/TS-todo


// Regular functions VS Arrow functions
// Arguments objects are not available in arrow function
// Regular functions Created using declarations or Expressions are "Constructible" and "Callable"
//  Arrow functions Does not have own "this" Keyword 
