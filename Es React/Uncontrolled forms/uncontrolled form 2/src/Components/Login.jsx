import React from 'react';

export const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
        
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    console.log('Username:', username);
    console.log('Password:', password);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
