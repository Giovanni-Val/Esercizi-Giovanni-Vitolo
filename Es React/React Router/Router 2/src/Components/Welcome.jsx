import React from 'react';

export const Welcome = ({ name = "Guest" }) => {
  return (
    <p>Benvenuto, {name}!</p>
  );
};
