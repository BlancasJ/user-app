import React, { createContext, useState } from 'react';

export const SignupContext = createContext();

export const SignupProvider = ( { children } ) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SignupContext.Provider value={ { name, setName, username, setUsername, password, setPassword } }>
      { children }
    </SignupContext.Provider>
  )
}