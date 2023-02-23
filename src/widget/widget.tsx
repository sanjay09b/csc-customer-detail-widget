import React from 'react';

function Widget() {
  const [count] = React.useState(0);
  return (
    <>
      <p>
                    You clicked  "sadasd"
        {count}
      </p>
      <button type="button">Click me sada</button>
    </>
  );
}

export default Widget;
