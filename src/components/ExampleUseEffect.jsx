import React, { useEffect, useState } from 'react';

export function ExampleUseEffect() {
  const [name, setName] = useState('Moshe');

  useEffect(() => {
    // alert(name);
  }, [name]);

  return (
    <div>
      <p>Hello Moshe</p>
      <button onClick={() => setName(name + '!')}>
        Add a ! to my name
      </button>
    </div>
  );
}