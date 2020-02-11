import React, { useState } from 'react';

export default function Simpleformhoos() {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
      setEmail(e.target.value)
  }
    return (
        <div>
            <input type="text" value={email} onChange={handleChange}></input>
        </div>
    )
}


