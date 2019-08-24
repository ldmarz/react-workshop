import React, { Component, useState } from 'react';

const Button = (props) => {
  const [obj, setCount] = useState({number: 0});
  return <button onClick={() => setCount({number: obj.number + 1})}> aaa </button>
};

export default Button;