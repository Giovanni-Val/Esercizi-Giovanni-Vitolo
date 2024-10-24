import React from 'react';
import { Age } from './Age';

export const Welcome = ({ name = "Guest", age }) => {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      {age && <Age age={age} />}
    </div>
  );
};
