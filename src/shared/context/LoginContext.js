import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ( { children } ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginContext.Provider value={ { username, setUsername, password, setPassword } }>
      { children }
    </LoginContext.Provider>
  )
}
