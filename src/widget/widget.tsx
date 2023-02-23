import React from 'react';
import './tailwind.css';
import './custom.css';

const Widget = () => {
  const [count] = React.useState(0);
  const clickHandler = () => {
    console.log('Click Handler Called');
  };
  return (
    <>
      <p className="app">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        You clicked a button!!!!!---
        {count}
      </p>
      <button type="button" onClick={clickHandler}>
        Click me sada
      </button>
    </>
  );
};

export default Widget;
