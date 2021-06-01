import React, { createContext, useState } from 'react';
import {USERS} from '../db/users'

export const UserContext = createContext();

export const UserProvider = ( { children } ) => {
  const [users, setUsers] = useState(USERS);

  return (
    <UserContext.Provider value={ { users, setUsers } }>
      { children }
    </UserContext.Provider>
  )
}