import React from "react";
import "./tailwind.css";
import "./custom.css";

const Widget = () => {
  const [count] = React.useState(0);
  return (
    <>
      <p className="app">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        You clicked a button!!!!!
        {count}
      </p>
      <button type="button" onClick={() => {}}>
        Click me
      </button>
    </>
  );
};

export default Widget;
