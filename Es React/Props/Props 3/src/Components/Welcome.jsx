import React from 'react';


export const Welcome = ({ name = "Guest", age }) => {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      {age && <p>Your age is {age}.</p>} {/*Condizione per mostrare solo in caso venga passata l'età*/}
    </div>
  );
};
