import React from 'react'
import { useState } from 'react';
function Form() {
    const [width, setWidth] = useState('');

    let handleChange = event => {
      const result = event.target.value.replace(/\D/g, '');
    let { value, min, max } = event.target;
      value = Math.max(Number(min), Math.min(Number(max), Number(value)));
  
      this.setState({ value });
      setWidth(result);
    };
    const [height, setHeight] = useState('');

    let handleChange2 = event => {
      const result = event.target.value.replace(/\D/g, '');
      let { value, min, max } = event.target;
      value = Math.max(Number(min), Math.min(Number(max), Number(value)));
  
      this.setState({ value });
      setHeight(result);
    };
    
  return (
    <div>
        <label htmlFor="width">width</label>
        <input
        value={width}
        onChange={handleChange}
         id='width'
          type="text"
          min={0}
          max={700} 
         />
        <label htmlFor="height">height</label>
        <input
        value={height}
        onChange={handleChange2} id='height' type="text" />
        <button>Click</button>
    </div>
  )
}

export default Form